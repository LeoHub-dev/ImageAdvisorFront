import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
		return this.http
    .post<any>(environment.apiUrl+'/auth/token', { email: email, password: password })
    .pipe(map(response => {

    	if (response) {
        localStorage.setItem('_authtoken', response.access_token);
      }
      
    }));
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('_authtoken');

    return this.http
    .get(environment.apiUrl+'/auth/logout')
    .pipe(map(response => {

    	if (response) {
        localStorage.removeItem('_authtoken');
      }
      
    }));
    
  }

}
