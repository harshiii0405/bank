import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
    getAllTransactions() {
      throw new Error('Method not implemented.');
    }
    private apiUrl = 'http://localhost:8080/Transaction'; 

    constructor(private http: HttpClient) { }
  
    getTransactionsByType(transactionType: string): Observable<any[]> {
      const url = `${this.apiUrl}/${transactionType}`;
      return this.http.get<any[]>(url);
    }
}
