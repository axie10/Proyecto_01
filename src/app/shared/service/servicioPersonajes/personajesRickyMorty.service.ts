import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../../interface/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesRickyMortyService {

  constructor(
    private http: HttpClient
  ) { }


  getPersonajes(): Observable<Personajes> {
    return this.http.get<Personajes>('https://rickandmortyapi.com/api/character');
  }

}
