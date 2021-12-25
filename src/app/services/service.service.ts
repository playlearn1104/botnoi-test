import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) {
  }

  private userUrl = 'https://jsonplaceholder.typicode.com/users';

  //getAlldata
  getAllData():Observable<User>{
   return this.http.get<User>(this.userUrl)
  }


}
