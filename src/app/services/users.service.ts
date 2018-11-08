import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

	constructor(private http: Http) { }

  getAll(): Observable<User[]> {
		return this.http
    .get('http://127.0.0.1:8000/api/v1/users')
    .pipe(map(response => {
      const users = response.json().message.data;
      return users.map((user) => new User(user))
    }));
  }

  /*private handleError (error: Response | any) {
	  console.error('ApiService::handleError', error);
	  return Observable.throw(error);
	}*/
}
