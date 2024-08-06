import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterByName } from '../../interface/filterByName.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioFilterNameService {

  private http = inject(HttpClient);

  constructor() { }

  public getFilterByName(name:string): Observable<FilterByName>{
    return this.http.get<FilterByName>(`https://rickandmortyapi.com/api/character/?species=${name}`);
  }



}
