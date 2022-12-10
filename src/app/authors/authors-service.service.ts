import { Injectable } from '@angular/core';
import {Author, AuthorRequest, localServer} from './utils';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Buffer} from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {

  constructor(
    private http: HttpClient
  ) { }
  getAll() {
    return this.http.get<AuthorRequest[]>(localServer.all)
      .pipe(map(value => value.map(x => this.ParseRequest(x) )));
  }
  getById(id: string) {
    return this.http.get<AuthorRequest>(localServer.get.concat(id))
      .pipe(map(value => this.ParseRequest(value)));
  }

  private ParseRequest = (a: AuthorRequest): Author => {
    return {
      ...a,
      photo: Buffer.from(!a.photo ? '' : a.photo)
    };
  };

}
