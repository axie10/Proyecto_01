import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../../interface/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeIndividualRickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonaje(id: string): Observable<Personaje> {
    return this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`);
  }

  getPersonajes(url: string): Observable<Personaje> {
    return this.http.get<Personaje>(url);
  } 

}