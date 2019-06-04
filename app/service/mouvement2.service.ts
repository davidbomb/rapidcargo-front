import { Injectable } from '@angular/core';
import { Mouvement } from '../entity/Mouvement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mouvement2Service {
  constructor(private http: HttpClient) { }


  /** Saves a new mouvement Entree 
   * @route 
   * @param mouvement  
   */
  saveMouvementEntree(mouvement: Mouvement): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api-rest/public/mouvements/entree' , mouvement);
  }

  /** Saves a new mouvement Sortie 
   * @route 
   * @param mouvement  
   */
  saveMouvementSortie(mouvement: Mouvement): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api-rest/public/mouvements/sortie' , mouvement);
  }

  /**
   * Retrieves the 50 last mouvements to display in the board
   * @route
   * @return
   */
  getLastMouvements(): Observable<Mouvement[]> {
    return this.http.get<Mouvement[]>('http://localhost:8080/api-rest/public/mouvements/last');
  }

  

}
