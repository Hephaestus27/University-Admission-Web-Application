

export class User {
    email: string;
    password: string;
    token_expired : boolean; 
    enabled: boolean;
    Verification_code: null;
    candidatid : number;
    constructor(
        email: string,
        password: string,
        token_expired: boolean,
        enabled : boolean,
        Verification_code:null,
        candidatid : number,
      
    
        ) {
         this.email = email;
         this.password = password;
         this.token_expired = false;
         this.enabled = false;
         this.Verification_code = Verification_code;
         this.candidatid = candidatid;
    }
} 