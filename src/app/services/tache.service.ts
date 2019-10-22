import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tache} from '../Classes/tache';


@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private Taches2Url;
  private allTachesUrl;
  private Taches1Url;
  private tacheUrl;
  private url;



  constructor(private http: HttpClient) {
    this.Taches2Url = 'http://localhost:8080/api/taches/graphe2';
    this.Taches1Url = 'http://localhost:8080/api/taches/graphe1';
    this.allTachesUrl = 'http://localhost:8080/api/taches/all';


  }




  getAllTaches(): Observable<any> {
    return this.http.get(`${this.allTachesUrl}`);
  }

  getTaches1(): Observable<any> {
    return this.http.get(`${this.Taches1Url}`);
  }


  getTaches2(): Observable<any> {
    return this.http.get(`${this.Taches2Url}`);
  }









}
