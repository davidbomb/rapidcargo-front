import { Component, OnInit } from '@angular/core';
import { Mouvement } from 'src/app/entity/Mouvement';
import { MouvementService } from 'src/app/service/mouvement.service';

import { HttpClient } from '@angular/common/http';
import { mockMouvements } from 'src/app/mock';

@Component({
  selector: 'app-historique-des-mouvements',
  templateUrl: './historique-des-mouvements.component.html',
  styleUrls: ['./historique-des-mouvements.component.css']
})
export class HistoriqueDesMouvementsComponent implements OnInit {

  /** A list of the 50 last movements that have been registered */

 
  mouvements: Mouvement[];

  constructor() {  
    console.log("HistoriqueDesMouvementsComponent")
    
    
  }
  
  ngOnInit() {
    this.mouvements = new Array<Mouvement>();
    this.mouvements = mockMouvements;
    
    // this.mouvementService.getLastMouvements().subscribe(
    //   mvts => {
    //     this.mockMouvements = mvts;
    //   },
    //   error => {
    //     console.log("error retrieving the mouvements: " + error.status);
    //   }
    // )
   
  }

}
