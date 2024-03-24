import '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup | any;
  a: number = 2;
  msg: string = "";

  constructor(
    private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      phone: [],
      password: [],
    });
  }
  onClickLogin() {
    this.loginService.authenticate(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.status === 'SUCCESS') {
          this.loginService.getUserInfo({ phone: this.loginForm.value.phone }).subscribe(
            (userData: any) => {           
              console.log(userData); 
              this.loginService.userData = userData;           
              this.router.navigate(['/account' ]);
            },
            (error: any) => {
              console.error('Error fetching user data:', error);         
            }
          );
        } else {
          this.msg = response.msg;
        }
      },
      (error: any) => {
        console.error('Error authenticating user:', error);
        this.router.navigate(['/login']);
      }
    ); 
}
}
