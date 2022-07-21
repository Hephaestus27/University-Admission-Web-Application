export class AdmissionData {

    choixFilierePrincipale : String;
    choixFiliereSecondaire : String;
    etape : String;
    etudesPostBac  : boolean;
    Frais_dossier : String;
    Lieu_diplomation_souhaite : String ;
    preuve_frais_dossier : String;
    session : String;
    status : String;


    constructor(

        choixFilierePrincipale : String,
        choixFiliereSecondaire : String,
        etape : String,
        etudesPostBac : boolean,
        Frais_dossier : String,
        Lieu_diplomation_souhaite : String ,
        preuve_frais_dossier : String,
        session : String,
        status : String,
    ){
        this.choixFilierePrincipale = choixFilierePrincipale ;
        this.choixFiliereSecondaire =  choixFiliereSecondaire ;
        this.etape =  etape;
        this.etudesPostBac = etudesPostBac;
        this.Frais_dossier = Frais_dossier;
        this.Lieu_diplomation_souhaite = Lieu_diplomation_souhaite;
        this.preuve_frais_dossier = preuve_frais_dossier;
        this.session = session;
        this.status = status;
    }



}