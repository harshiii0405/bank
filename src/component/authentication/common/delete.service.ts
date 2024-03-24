import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:8080'; 

  authenticate(phone: string) {
    console.log(phone)
    // return this.http.post(`${this.apiUrl}/deactivate`, phone);
  // }
  const params = new HttpParams().set('phone', phone); // Set the phone parameter
    return this.http.post(`${this.apiUrl}/deactivate`, {}, { params: params });
  }
}