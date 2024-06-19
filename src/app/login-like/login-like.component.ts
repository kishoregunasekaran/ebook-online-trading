import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-like',
  templateUrl: './login-like.component.html',
  styleUrls: ['./login-like.component.css']
})
export class LoginLikeComponent {
  @Input() cartItems: any[] = [];
}
