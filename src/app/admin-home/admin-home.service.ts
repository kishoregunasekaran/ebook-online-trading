import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  private apiUrl = 'http://localhost:3000/api/books'; // Ensure this matches the backend endpoint

  constructor(private http: HttpClient) { }

  getBooksByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?category=${category}`);
  }

  deleteBook(bookId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${bookId}`);
  }

  // Implement other necessary methods like updateBook if needed
}
