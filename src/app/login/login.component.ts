import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router, private registerService: RegisterService) { }

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.registerService.login(credentials).subscribe(
      response => {
        console.log('Login successful:', response);
        const user = response.user;
        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error => {
        console.error('Login error:', error);
        this.message = 'Invalid login credentials. Please try again.';
      }
    );
  }
}
