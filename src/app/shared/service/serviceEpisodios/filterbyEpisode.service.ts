import { SingleEpisode } from './../../interface/singleEpisoded.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterbyEpisodeService {

  constructor(
    private http: HttpClient
  ) { }

  getfilterByepisode(episode: string): Observable<SingleEpisode> {
    return this.http.get<SingleEpisode>(`https://rickandmortyapi.com/api/episode/${episode}`);

  }

}
