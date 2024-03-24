import { Routes } from '@angular/router';
import { AccountComponent } from '../component/authentication/account/account.component';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { LoginComponent } from '../component/authentication/login/login.component';
import { SignUpComponent } from '../component/authentication/sign-up/sign-up.component';
import { Component } from '@angular/core';
import { AddmoneyComponent } from '../component/authentication/account/addmoney/addmoney.component';
import { WidmoneyComponent } from '../component/authentication/account/widmoney/widmoney.component';
import { DeactivateComponent } from '../component/authentication/account/deactivate/deactivate.component';
import { TransactionsComponent } from '../component/authentication/account/transactions/transactions.component';


export const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddmoneyComponent,
    pathMatch: 'full',
  },
  {
    path: 'wid',
    component: WidmoneyComponent,
    pathMatch: 'full',
  },
  {
    path: 'deactivate',
    component:DeactivateComponent,
    pathMatch: 'full',
  }
  ,
  {
    path: 'transactions',
    component:TransactionsComponent,
    pathMatch: 'full',
  }
  
];

