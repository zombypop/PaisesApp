import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountriesResponse } from '../interfaces/paises.interface';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',

})
export class PaisesService {

  private url: string = "https://restcountries.com/v2/"

  constructor(private http: HttpClient) { }

  buscarpais(termino: string): Observable<any> {
    return this.http.get<any>(`${this.url}/name/${termino}`)
      //  .pipe(
      //    catchError(err => of([ ]))
      //  )
  }

  buscarCapital(termino: string): Observable<any> {
    return this.http.get<any>(`${this.url}/capital/${termino}`)
      //  .pipe(
      //    catchError(err => of([ ]))
      //  )
  }


  buscarPaisPorCodigo(codigo: string): Observable<any> {
    return this.http.get<any>(`${this.url}/alpha/${codigo}`)
      //  .pipe(
      //    catchError(err => of([ ]))
      //  )
  }

  buscarPorRegion(region: string): Observable<any> {
    return this.http.get<any>(`${this.url}/regionalbloc/${region}`)
      //  .pipe(
      //    catchError(err => of([ ]))
      //  )
  }

}
