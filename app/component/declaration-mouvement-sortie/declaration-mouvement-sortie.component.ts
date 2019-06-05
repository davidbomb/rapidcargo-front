import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mouvement } from 'src/app/entity/Mouvement';
import { MouvementService } from 'src/app/service/mouvement.service';
import { Observable } from 'rxjs';
import { Mouvement2Service } from 'src/app/service/mouvement2.service';


@Component({
  selector: 'app-declaration-mouvement-sortie',
  templateUrl: './declaration-mouvement-sortie.component.html',
  styleUrls: ['./declaration-mouvement-sortie.component.css'],
  providers: [MouvementService]
})
export class DeclarationMouvementSortieComponent implements OnInit {

  form: FormGroup;

  mouvementSortie: Mouvement;

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
      'magasinDestination': [null, Validators.required],
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
    this.mouvementSortie = new Mouvement();
  }


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
  
  sendMouvementSortieForm() {
    if(this.isValidForm()){
      this.setMouvement()
      console.log(this.mouvementSortie);
      this.mouvementService.saveMouvementSortie(this.mouvementSortie).subscribe(
        res => {
          console.log(res);
        },
        error => {
           console.log("ERROR on the backend server: " + error); 
        }
      )
    }
  }

  setMouvement(): void {
    this.mouvementSortie.typeMouvement = 'SORTIE';
    this.mouvementSortie.infosMarchandise.description = this.form.get('description').value;
    this.mouvementSortie.infosMarchandise.reference = this.form.get('reference').value;
    this.mouvementSortie.infosMarchandise.quantite = this.form.get('quantite').value;
    this.mouvementSortie.infosMarchandise.quantiteTotaleRef = this.form.get('quantiteTotale').value;
    this.mouvementSortie.infosMarchandise.poids = this.form.get('poids').value;
    this.mouvementSortie.infosMarchandise.poidsTotalRef = this.form.get('poidsTotal').value;
    this.mouvementSortie.infosMarchandise.typeReference = this.form.get('typeReference').value;
    this.mouvementSortie.statutDouanier = this.form.get('statutDouanier').value;
    this.mouvementSortie.magasinDestination = this.form.get('magasinDestination').value;
  }

  annuler() {
    this.form.setValue({
      magasinDestination: null,
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

}
