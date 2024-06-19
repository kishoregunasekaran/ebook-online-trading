import { Component } from '@angular/core';
import { AdminAddService } from '../admin-add/admin-add.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  book = {
    title: '',
    author: '',
    category:'',
    description: '',
    bookImageUrl: '',
    paid: false,
    price: null,
    languages: ''
  };

  message: string = '';

  constructor(private adminAddService: AdminAddService) {}

  onSubmit() {
    const bookData = {
      ...this.book,
      languages: this.book.languages.split(',').map(lang => lang.trim())
    };
    
    this.adminAddService.addBook(bookData).subscribe(
      (response: any) => {
        this.message = response.message;
      },
      (error: any) => {
        this.message = 'Error submitting book';
        console.error(error);
      }
    );
  }
}
