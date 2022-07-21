import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CandidatRegistrationService {

  constructor( private Http:HttpClient) { }


  public RegisterCandidat(candidat: any){
    
    return this.Http.post("http://localhost:8080/api/candidat/create",candidat,{responseType:'text' as 'json'});
  
            }

            public RegisterUser(candidat: any){
    
              return this.Http.post("http://localhost:8080/api/candidat/create",candidat,{responseType:'text' as 'json'});
            
                      }

                      public fetchCandidat(id: number){
                       let link = `http://localhost:8080/api/candidat/${id}`;
                        
                        return this.Http.get(link,{responseType:'text' as 'json'});
                      
                                }
          
        
}

