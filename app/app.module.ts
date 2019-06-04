import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationMouvementEntreeComponent } from './component/declaration-mouvement-entree/declaration-mouvement-entree.component';
import { DeclarationMouvementSortieComponent } from './component/declaration-mouvement-sortie/declaration-mouvement-sortie.component';
import { HistoriqueDesMouvementsComponent } from './component/historique-des-mouvements/historique-des-mouvements.component';
import { MouvementService } from './service/mouvement.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Mouvement2Service } from './service/mouvement2.service';



const appRoutes: Routes = [
  { path: 'mouvement-entree', component: DeclarationMouvementEntreeComponent },
  { path: 'mouvement-sortie', component: DeclarationMouvementSortieComponent },
  { path: 'historique-mouvements', component: HistoriqueDesMouvementsComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    DeclarationMouvementEntreeComponent,
    DeclarationMouvementSortieComponent,
    HistoriqueDesMouvementsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MouvementService,
    Mouvement2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
