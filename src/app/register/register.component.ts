
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required] // Default role is 'user', can be changed as needed
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      this.registerService.register(this.form.value).subscribe(
        response => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration error:', error);
        }
      );
    }
  }
}
