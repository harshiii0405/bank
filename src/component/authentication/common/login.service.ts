import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;
  constructor(private http: HttpClient) { }
 apiUrl='http://localhost:8080';

  authenticate(arg0: { phone: any; password: any; }) {
    return this.http.post(`${this.apiUrl}/login`, arg0);
  } 
  
  getUserInfo({ phone }: { phone: string; }): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/user?phone=${phone}`);
  }
}


  
