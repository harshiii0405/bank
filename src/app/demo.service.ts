import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  url='http://localhost:8080/user?phone=0';
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
    console.log(this.http.get(this.url));
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AccountService {
//   url='http://localhost:8080';
//   constructor(private http:HttpClient) { }
//   users()
//   {
//     return this.http.get(this.url);
//   }
// }
