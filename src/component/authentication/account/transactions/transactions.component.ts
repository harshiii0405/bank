import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { TransactionService } from '../../common/transaction.service';
import {  DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{
    transaction:   any[] = [];
    
    // transactionService: any;
    transactionType:any[] | undefined;
    selectedOption: string = 'all';
    constructor(private transactionService: TransactionService ) { }

    ngOnInit(): void {
        this.getAllTransactions();
      }
      
      filterTransactions() {
        if (this.selectedOption === 'all') {
          this.getAllTransactions();
        } else if (this.selectedOption === 'deposit') {
        
          this.transaction = this.transaction.filter(transaction => transaction.transactionType === 'deposit');
        } else if (this.selectedOption === 'withdrawal') {
         
          this.transaction = this.transaction.filter(transaction => transaction.transactionType === 'withdrawal');

        }
    
}
     getAllTransactions(): void {
        this.transactionService.getAllTransactions().subscribe(
            (data: any) => {
                this.transaction = data; 
                console.log('Transactions:', this.transaction);
                console.log('All transactions fetched successfully.');
                 this.filterTransactions();
              },
              (error: any) => {
                console.error('Error fetching transactions:', error);
              }
            );
        
      }
    
}