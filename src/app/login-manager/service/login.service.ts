import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginQuery } from '../models/login-query';
import { LoginResponse } from '../models/login-response';
import { Logout } from '../models/logout';
import { LogoutStatus } from '../models/logout-status';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private urlLogin = environment.apiUrl + "auth/?data";
  private urlLogout = environment.apiUrl + "logout/";

  constructor(private http: HttpClient) { }
  
  getLogin(login: LoginQuery): Observable<LoginResponse> {
    //login = new LoginQuery("Sauko_i", "ыфглщ86");
    return this.http.post<LoginResponse>(`${this.urlLogin}`, login);
  }

  postLogout(login: Logout): Observable<LogoutStatus> {
    return this.http.post<LogoutStatus>(`${this.urlLogout}`, login);
  }
}
