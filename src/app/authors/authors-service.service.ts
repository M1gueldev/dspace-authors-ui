import { Injectable } from '@angular/core';
import {Author, AuthorRequest, localServer} from './utils';
import {catchError, map, retry} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {throwError} from 'rxjs';

//const Buffer = require('buffer/').Buffer;  // note: the trailing slash is important!

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };
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
    console.log('start Creation:', author);
    return this.http.post(localServer.create, JSON.stringify(author), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      ).pipe(
        map(value => this.ParseRequest(value as AuthorRequest))
      );
  }
  update(author: AuthorRequest) {
    console.log('start Update:', author);
    return this.http.patch(localServer.update, {id: author.id, data: author})
      .pipe(map(value => this.ParseRequest(value as AuthorRequest)));
  }
  delete(id: string) {
    return this.http.delete(localServer.delete.concat(id), );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  private ParseRequest = (a: AuthorRequest): Author => {
    return {
      ...a,
      photo: Buffer.from(!a.photo ? '' : a.photo)
    };
  };

}
