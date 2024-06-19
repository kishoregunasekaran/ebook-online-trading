import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Correct import for ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginLikeComponent } from './login-like/login-like.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AdminHomeComponent,
    AdminAddComponent,
    AdminPaymentComponent,
    LoginHomeComponent,
    LoginLikeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule, // Add CommonModule
    GooglePayButtonModule
   
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
