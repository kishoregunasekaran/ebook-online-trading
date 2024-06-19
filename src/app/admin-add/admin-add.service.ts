import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAddService {

  private apiUrl = 'http://localhost:3000/api/addBook';

  constructor(private http: HttpClient) {}

  addBook(book:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }
}
