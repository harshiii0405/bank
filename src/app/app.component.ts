import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../component/authentication/login/login.component';
import { SignUpComponent } from '../component/authentication/sign-up/sign-up.component';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { AccountComponent } from '../component/authentication/account/account.component';
import { CommonModule } from '@angular/common';
import { AddmoneyComponent } from '../component/authentication/account/addmoney/addmoney.component';
import { DeactivateComponent } from '../component/authentication/account/deactivate/deactivate.component';
import { AccountService } from '../component/authentication/common/account.service';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,SignUpComponent,HomePageComponent,AccountComponent,CommonModule,AddmoneyComponent,DeactivateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  
  
}
