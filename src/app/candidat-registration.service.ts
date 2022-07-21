import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CandidatRegistrationService {

  constructor( private Http:HttpClient) { }


  public RegisterCandidat(candidat: any){
    
    return this.Http.post("https://backenduniv.herokuapp.com/api/candidat/create",candidat,{responseType:'text' as 'json'});
  
            }

            public RegisterUser(candidat: any){
    
              return this.Http.post("https://backenduniv.herokuapp.com/api/candidat/create",candidat,{responseType:'text' as 'json'});
            
                      }

                      public fetchCandidat(id: number){
                       let link = `https://backenduniv.herokuapp.com/api/candidat/${id}`;
                        
                        return this.Http.get(link,{responseType:'text' as 'json'});
                      
                                }
          
        
}

