import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllLocation, Result } from '../../interface/allLocation.interface';

@Injectable({
  providedIn: 'root'
})
export class AlllocationService {

  http = inject(HttpClient);

  constructor() { }

  getAllLocation(): Observable<AllLocation> {
    return this.http.get<AllLocation>('https://rickandmortyapi.com/api/location');
  }

  getSingleLocation(id: number): Observable<Result> {
    return this.http.get<Result>(`https://rickandmortyapi.com/api/location/${id}`);
  }

}
