import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DeleteService } from '../common/delete.service';
import { CommonModule } from '@angular/common';
import { Block } from '@angular/compiler';
import { LoginService } from '../common/login.service';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { ModalComponent } from '../common/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../common/account.service';
import { DemoService } from '../../../app/demo.service';
import { privateDecrypt } from 'crypto';
import { ActiveService } from '../common/active.service';
// import { TransactionService } from '../common/transaction.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ModalComponent,CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent  implements OnInit{
  userName: string | any;
  phone: string| any;
  accountNo: string|any;
  msg: any;
  deleteForm: UntypedFormGroup | any;
  userData: any;
  activeForm: UntypedFormGroup | any;
  transaction: {} | undefined;
  // transaction: any = {};


  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private deleteService: DeleteService,
    private http: HttpClient,
    private loginService:LoginService,
    private activeService:ActiveService,
    // private transactionService:TransactionService
  ){
    this.initializeForm();
  }

  ngOnInit(): void {
    this.userData = this.loginService.userData; 
    // this.phone = this.userData.phone;
  }

  getUserInfo(): void {
    this.http.get<any>('http://localhost:8080/user').subscribe(
      (data: any) => {
        if (data) {
          this.userName = data.userName;
          this.phone = data.phone;
          this.accountNo = data.accountNo;
        } else {
          console.error('User data is null.');
        }
      },
      (error: any) => {
        console.error('Error fetching user info:', error);
      }
    );
  }
  

  openModal()
  {
    const modalDiv = document.getElementById('myForm');
    if(modalDiv){
      modalDiv.style.display='block';
    }
    else {
      console.error('Modal element not found.'); 
    }
  }

  closeForm()
  {
    const modalDiv =document.getElementById('myForm');
    if(modalDiv){
      modalDiv.style.display='none';
    }
    else {
      console.error('Modal element not found.'); 
    }
  
  }

  initializeForm() { 
    this.deleteForm = this.formBuilder.group({
      phone: [''],
    });
    this.activeForm=this.formBuilder.group({
      phone:[''],
    })
  }

  openSubmit(){
    
    this.deleteService.authenticate(this.userData.phone).subscribe((r: any) => {
      console.log("Hello", r);
      console.log('Form Value:', this.phone);
      if (r.status === 'SUCCESS') {
        this.msg = r.msg;
        // console.log(this.msg);
      }
      else {
        this.msg = r.msg;
      }
    });
  }
  // showTransaction(){
  //   this.transactionService.authenticate(this.userData.phone).subscribe((r:any)=>{
  //     console.log("hi",r);
  //   })
  // }
  openActive(){
    this.activeService.authenticate(this.userData.phone).subscribe((r: any) => {
      console.log("Hello", r);
      console.log('Form Value:', this.phone);
      if (r.status === 'SUCCESS') {
        this.msg = r.msg;
        // console.log(this.msg);
      }
      else {
        this.msg = r.msg;
      }
    });
  }
  
  
  setDeleteInDto() {
    return {
      phone: this.deleteForm.value.phone,
    };
  }

  openModals()
  {
    const modalDivs = document.getElementById('aForm');
    if(modalDivs){
      modalDivs.style.display='block';
    }
    else {
      console.error('Modal element not found.'); 
    }
  }

  closeForms()
  {
    const modalDivs =document.getElementById('aForm');
    if(modalDivs){
      modalDivs.style.display='none';
    }
    else {
      console.error('Modal element not found.'); 
    }
  
  }

  
  setactiveInDto() {
    return {
      phone: this.activeForm.value.phone,
    };
  } 
  

  onSubmit() {
    this.http.post<any>('http://localhost:8080/api/transactions', this.transaction)
    .subscribe(
      response => {
        console.log('Transaction created successfully:', response);
        this.transaction = {};
       
        this.getAllTransactions();
      },
      error => {
        console.error('Error creating transaction:', error);
      }
    );
  }
  getAllTransactions() {
    throw new Error('Method not implemented.');
  }

}


