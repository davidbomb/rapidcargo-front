import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Mouvement } from 'src/app/entity/Mouvement';
import { MouvementService } from 'src/app/service/mouvement.service';



@Component({
  selector: 'app-declaration-mouvement-entree',
  templateUrl: './declaration-mouvement-entree.component.html',
  styleUrls: ['./declaration-mouvement-entree.component.css'],
  providers: [MouvementService]
})
export class DeclarationMouvementEntreeComponent implements OnInit {

  /** Formulaire de saisie du mouvement */
  form: FormGroup;

  /** Attributs du mouvement */
  mouvementEntree: Mouvement; 
  
  
  /** 
   * Used to display error messages when rules about
   * weight and quantity are not respected 
   */
  quantiteError: boolean = false;
  poidsError: boolean = false;
  referenceError: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private mouvementService: MouvementService
              ) {

    this.form = formBuilder.group({
      'magasinOrigine': [null, Validators.required],
      'typeReference': [null, Validators.required],
      'reference': [null, Validators.required],
      'statutDouanier': [null, Validators.required], 
      'description': [null, Validators.required],
      'quantite': [null, Validators.required],
      'quantiteTotale': [null, Validators.required],
      'poids': [null, Validators.required],
      'poidsTotal': [null, Validators.required]
    })
    
    
    
  }

  ngOnInit() {
    this.mouvementEntree = new Mouvement();
    
  }

  /** Send the form */
  sendMouvementEntreeForm(): void{
    if(this.isValidForm()) {
      this.setMouvement()
      console.log(this.mouvementEntree);
      this.mouvementService.saveMouvementEntree(this.mouvementEntree).subscribe(
        res => {
          console.log(res);
        },
        error => {
           console.log("ERROR on the backend server: " + error); 
        }
      )
    } else {
      console.log("INVALID FORM")
    }

    
      
  }

  /** Set the mouvement object to save it in the backend */
  setMouvement(): void {
    this.mouvementEntree.typeMouvement = 'ENTREE';
    this.mouvementEntree.infosMarchandise.description = this.form.get('description').value;
    this.mouvementEntree.infosMarchandise.reference = this.form.get('reference').value;
    this.mouvementEntree.infosMarchandise.quantite = this.form.get('quantite').value;
    this.mouvementEntree.infosMarchandise.quantiteTotaleRef = this.form.get('quantiteTotale').value;
    this.mouvementEntree.infosMarchandise.poids = this.form.get('poids').value;
    this.mouvementEntree.infosMarchandise.poidsTotalRef = this.form.get('poidsTotal').value;
    this.mouvementEntree.statutDouanier = this.form.get('statutDouanier').value;
    this.mouvementEntree.infosMarchandise.typeReference = this.form.get('typeReference').value;
    this.mouvementEntree.magasinOrigine = this.form.get('magasinOrigine').value;
  }

  /** Initializes the values of the form */
  resetValues(): void {
    this.form.setValue({
      magasinOrigine: null,
      typeReference: null,
      reference: '',
      statutDouanier: null,
      description: '',
      quantite: null,
      quantiteTotale: null,
      poids: null,
      poidsTotal: null
    });
  }

  
  /** Checks the validity of the form before sending it to the backend */
  isValidForm(): boolean {
    if (Number(this.form.get('quantite').value) > Number(this.form.get('quantiteTotale').value)){
      this.quantiteError = true;
    } else { this.quantiteError = false }
    if (Number(this.form.get('poids').value) > Number(this.form.get('poidsTotal').value)){
      this.poidsError = true; 
    } else { this.poidsError = false }
    if (this.form.get('typeReference').value === 'AWB' 
    && this.form.get('reference').value.length !== 11){
      this.referenceError = true;    
    } else { this.referenceError = false }    
    console.log("valid: " + !(this.poidsError || this.quantiteError || this.referenceError));
    return !(this.poidsError || this.quantiteError || this.referenceError);
  }







  annuler(): void {
    this.resetValues();
  }
}
