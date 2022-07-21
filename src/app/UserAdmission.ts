export class UserAdmission {

    
        dateDepot: String;
        dateModification: String;
        status: String;
        session: String;
        etape: String;
        etudesPostBac: Boolean;
        lieuDiplomationSouhaite: String;
        choixFilierePrincipale: String;
        choixFiliereSecondaire: String;
        fraisDossier: number;
        dateReglementFraisDossier: String;
        preuveFraisDossier: String;
        candidat: String;
        inscription: String;
    

    constructor(
  
        dateDepot: String,
        dateModification: String,
        status: String,
        session: String,
        etape: String,
        etudesPostBac: Boolean,
        lieuDiplomationSouhaite: String,
        choixFilierePrincipale: String,
        choixFiliereSecondaire: String,
        fraisDossier: number,
        dateReglementFraisDossier: String,
        preuveFraisDossier: String,
        candidat: String,
        inscription: String
    
    
    ){
        
        this.dateDepot  = dateDepot;
        this.dateModification = dateModification;
        this.status = status;
        this.session = session;
        this.etape = etape;
        this.etudesPostBac = etudesPostBac;
        this.lieuDiplomationSouhaite = lieuDiplomationSouhaite;
        this.choixFilierePrincipale=  choixFilierePrincipale; 
        this.choixFiliereSecondaire = choixFiliereSecondaire; 
        this.fraisDossier = fraisDossier; 
        this.dateReglementFraisDossier = dateReglementFraisDossier;

        this.preuveFraisDossier = preuveFraisDossier; 
        this.candidat = candidat;
        this.inscription = inscription;    

    }



}