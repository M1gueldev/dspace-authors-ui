import { Injectable } from '@angular/core';
import {Author, AuthorRequest, localServer} from './utils';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

//const Buffer = require('buffer/').Buffer;  // note: the trailing slash is important!

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
  create(author: AuthorRequest) {
    return this.http.post(localServer.create, author);
  }
  update(author: AuthorRequest) {
    return this.http.patch(localServer.update, {id: author.id, data: author});
  }

  private ParseRequest = (a: AuthorRequest): Author => {
    return {
      ...a,
      photo: Buffer.from(!a.photo ? '' : a.photo)
    };
  };

}
