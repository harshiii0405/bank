import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url='http://localhost:8080';
  constructor(private http:HttpClient) { }
  getUserInfo(phoneNumber: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/user?phone=${phoneNumber}`);
  }
}
