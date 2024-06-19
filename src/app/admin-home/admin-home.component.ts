import { Component, OnInit } from '@angular/core';
import { AdminHomeService } from '../admin-home/admin-home.service';

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  ebook_link: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  categories = ['History', 'Geography', 'Comedy', 'English', 'Literature', 'Article', 'Grammar', 'Short Stories', 'Novel', 'Economics', 'Adults', 'Children', 'Technical', 'IT', 'CS', 'Electronics'];
  books: Book[] = [];
  selectedCategory: string = '';

  constructor(private adminHomeService: AdminHomeService) { }

  ngOnInit(): void {
    // Optionally, fetch books for a default category
    this.fetchBooks('Novel');
  }

  fetchBooks(category: string): void {
    this.selectedCategory = category;
    this.adminHomeService.getBooksByCategory(category).subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  editBook(book: Book): void {
    // Implementation for editing the book
  }

  deleteBook(bookId: string): void {
    this.adminHomeService.deleteBook(bookId).subscribe(() => {
      this.fetchBooks(this.selectedCategory);
    });
  }
}
