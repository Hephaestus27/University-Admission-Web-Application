import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor( private Http:HttpClient) { }


  public RegisterUser(user: any){
    
    return this.Http.post(" http://localhost:8080/api/user/create",user,{responseType:'text' as 'json'});
  
            }

            
}
