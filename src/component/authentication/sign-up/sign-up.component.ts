import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';
import { SignUpService } from '../common/sign-up.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signupForm: UntypedFormGroup|any;
  a: number = 2; 
  msg: string ="";

  constructor(private formBuilder: UntypedFormBuilder,
    private signUpService:SignUpService) {
    this.initializeForm();
  }
  initializeForm() {

    this.signupForm = this.formBuilder.group({
      userName: [],
      phone: [],
      password: [],
      
    });
  }
  onclicksignup(){
      this.signUpService.create(this.setSignUpInDto()).subscribe((r:any)=>{ 
      console.log(r)
      this.msg=r.message;
      
    });
    console.log( this.signupForm.value)
  }

  setSignUpInDto(){
    return {
      userName:this.signupForm.value.userName,
      phone:this.signupForm.value.phone,
      password:this.signupForm.value.password
    }
  }
}
