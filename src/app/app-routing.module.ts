import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginLikeComponent } from './login-like/login-like.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'admin-add',component:AdminAddComponent},
  {path:'admin-payment',component:AdminPaymentComponent},
  {path:'login-home',component:LoginHomeComponent},
  {path:'login-like',component:LoginLikeComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  
  imports: [
    BrowserModule,RouterModule.forRoot(routes)


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
