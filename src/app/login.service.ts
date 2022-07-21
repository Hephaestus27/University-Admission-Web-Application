import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  public Ucl(Credentials: any){
    
   
    return this.Http.post("https://backenduniv.herokuapp.com/api/user/credentials",Credentials,{responseType:'text' as 'json'});
  
}
public Employeecl(Credentials: any){
    
   
  return this.Http.post("https://backenduniv.herokuapp.com/api/employee/credentials",Credentials,{responseType:'text' as 'json'});

}
}
