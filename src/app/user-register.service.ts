import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor( private Http:HttpClient) { }


  public RegisterUser(user: any){
    
    return this.Http.post("https://backenduniv.herokuapp.com/api/user/create",user,{responseType:'text' as 'json'});
  
            }

            
}
