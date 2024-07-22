import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allepisodios } from '../../interface/allEpisodios.interface';

@Injectable({
  providedIn: 'root'
})
export class AllEpisodiosService {

  constructor(
    private http: HttpClient
  ) { }

  getEpisodios(): Observable<Allepisodios> {
    return this.http.get<Allepisodios>('https://rickandmortyapi.com/api/episode');
  }

}
