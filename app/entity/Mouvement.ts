import { InfosMarchandise } from './InfosMarchandise';

export class Mouvement {
    id: number;
    dateCreation: Date;
    userCreation: string;
    dateMouvement: Date;
    lieuDeclaration: string;
    infosMarchandise: InfosMarchandise;
    codeLibelle: string;
    statutDouanier: string;
    typeRef: string;
    typeMouvement: string;
    magasinOrigine: string;
    magasinDestination: string;
    constructor() {
        this.lieuDeclaration = "RapidCargo CDG";
        this.infosMarchandise = new InfosMarchandise();
     }
  }
  