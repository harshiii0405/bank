import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WidmoneyService } from '../../common/widmoney.service';

@Component({
  selector: 'app-widmoney',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './widmoney.component.html',
  styleUrl: './widmoney.component.css'
})
export class WidmoneyComponent {
    widMoneyForm: UntypedFormGroup | any;
    amount: number = 0; 
    msg: string ="";
    router: any;

  
    constructor(private formBuilder: UntypedFormBuilder,
      private widMoneyService: WidmoneyService) {
      this.initializeForm();
    }
  
    initializeForm() {
      this.widMoneyForm = this.formBuilder.group({
        phone:[],
        amount: [],
      });
    }
  
    onClickWidMoney() {
      this.widMoneyService.widmoney(this.setWidMoneyDto()).subscribe((r: any) => { 
        console.log(r);
        if (r.status === 'SUCCESS') {
          this.msg = r.msg;
          
         
        } else {
          this.msg = r.msg;
        
        }
      });
      console.log(this.widMoneyForm.value)
    }
  
    setWidMoneyDto() {
      return {
        phone:this.widMoneyForm.value.phone,
        amount: this.widMoneyForm.value.amount
      };
    }
  }

