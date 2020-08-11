import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) {
   }
  createUser(user){
    return this.http.post("http://localhost:3000/users",user);
  }
  updateUser(user){
    return this.http.put("http://localhost:3000/users/" +user.id,user)
  }
  getAllUser(){
    return this.http.get("http://localhost:3000/users");
  }
  deleteUser(user){
   return this.http.delete("http://localhost:3000/users/" +user.id)
  }
}
