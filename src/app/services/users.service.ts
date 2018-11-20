import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

	constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
		return this.http
    .get<any>(environment.apiUrl+'/users')
    .pipe(map(response => {
      const users = response.message.data;
      return users.map((user) => new User(user))
    }));
  }

  register(user: User) {
    return this.http.post(environment.apiUrl+'/users', user);
  }

}
