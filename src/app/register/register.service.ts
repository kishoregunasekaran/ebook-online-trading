import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userDetails);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
}
