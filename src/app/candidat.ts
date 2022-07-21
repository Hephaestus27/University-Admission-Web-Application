

export class Candidat {

    prenom: string;
    nom: string;
    adresse: string;
    ville: string;
    pays: string;
    codePostal: string;
    sexe: string;
    tel: string;
    mail: string;
    villeNaissance: string ;
    status: string;
    cin: string;
    passeport: null;
    niveauEtude: string;

    constructor(
        prenom: string,
        nom: string,
        adresse: string,
        ville: string,
        pays: string,
        codePostal: string,
        sexe: string,
        tel: string,
        mail: string,
        villeNaissance: string ,
        status: string,
        cin: string,
        passeport: null,
        niveauEtude: string
        ) {
            this.prenom = prenom;
            this.nom = nom;
            this.adresse =adresse;
            this.ville = ville;
            this.pays = pays;
            this.codePostal = codePostal;
            this.sexe = sexe;
            this.tel = tel;
            this.mail = mail;
            this.villeNaissance = villeNaissance;
            this.status = status;
            this.cin = cin ;
            this.passeport = passeport;
            this.niveauEtude= niveauEtude;
    }
} 