import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  public Ucl(Credentials: any){
    
   
    return this.Http.post("http://localhost:8080/api/user/credentials",Credentials,{responseType:'text' as 'json'});
  
}
public Employeecl(Credentials: any){
    
   
  return this.Http.post("http://localhost:8080/api/employee/credentials",Credentials,{responseType:'text' as 'json'});

}
}
