export class AdmissionList {
    choixFilierePrincipale : String;
    choixFiliereSecondaire : String;
    dateDepot : String;
    constructor(
        choixFilierePrincipale : String,
        choixFiliereSecondaire : String,
        dateDepot : String,
    ){
        this.choixFilierePrincipale = choixFilierePrincipale ;
        this.choixFiliereSecondaire = choixFiliereSecondaire ;
        this.dateDepot = dateDepot;
    }


}