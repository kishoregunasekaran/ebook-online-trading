import { Component, OnInit } from '@angular/core';
import { LoginHomeService } from './login-home.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  categories: string[] = ['History','Fantasy', 'Science Fiction', 'Mystery']; // Example categories
  selectedCategory: string = '';
  books: any[] = [];
  cart: any[] = [];
  buttonWidth: number = 240;

  constructor(private loginHomeService: LoginHomeService) { }

  ngOnInit(): void {
    this.fetchBooks(this.categories[0]); // Fetch books for the first category
  }

  fetchBooks(category: string): void {
    this.selectedCategory = category;
    this.loginHomeService.getBooksByCategory(category).subscribe(
      (data) => {
        this.books = data; // Assuming data is an array of books with URLs
      },
      (error) => {
        console.error('Error fetching books', error);
        this.books = []; // Clear books array on error or handle as needed
      }
    );
  }

  addToCart(book: any): void {
    this.cart.push(book);
  }

  onLoadPaymentData(event: any): void {
    console.log('Payment data loaded', event.detail);
    // Handle payment success logic here
  }
}
