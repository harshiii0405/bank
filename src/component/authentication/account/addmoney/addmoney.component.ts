import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AddmoneyService } from '../../common/addmoney.service';
import { DemoService } from '../../../../app/demo.service';

@Component({
  selector: 'app-addmoney',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './addmoney.component.html',
  styleUrl: './addmoney.component.css'
})
export class AddmoneyComponent {
  addMoneyForm: UntypedFormGroup | any;
  amount: number = 0; 
  msg: string ="";
  router: any;

  constructor(private formBuilder: UntypedFormBuilder,
    private addMoneyService: AddmoneyService) {
    this.initializeForm();
  }

  initializeForm() {
    this.addMoneyForm = this.formBuilder.group({
      phone:[],
      amount: [],
    });
  }

  onClickAddMoney() {
    this.addMoneyService.addmoney(this.setAddMoneyDto()).subscribe((r: any) => { 
      console.log(r);
      if (r.status === 'SUCCESS') {
        this.msg = r.msg;
        
       
      } else {
        this.msg = r.msg;
      
      }
    });
    console.log(this.addMoneyForm.value)
  }

  setAddMoneyDto() {
    return {
      phone:this.addMoneyForm.value.phone,
      amount: this.addMoneyForm.value.amount
    };
  }

  demo(){
    console.log(DemoService)
  }
}