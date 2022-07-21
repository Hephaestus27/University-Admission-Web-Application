export class AdmissionComptable {
    Nomducandidat : String;
    Choix_filiere_pricipale : String;
    choix_filliere_secondaire : String;
    dateDepot:String;


    constructor(
        Nomducandidat : String,
        Choix_filiere_pricipale : String,
        choix_filliere_secondaire:String,
        dateDepot:String,
    ){
        this.Choix_filiere_pricipale = Choix_filiere_pricipale ;
        this.choix_filliere_secondaire = choix_filliere_secondaire;
        this.dateDepot = dateDepot;
        this.Nomducandidat = Nomducandidat;
    }


}