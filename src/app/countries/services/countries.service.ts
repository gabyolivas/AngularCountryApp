import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError , map, of} from 'rxjs';

import { Country } from '../interfaces/countries';

@Injectable({
    providedIn: 'root'
})

export class CountriesService {
  
  private serviceURL: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient ) { 
  }

  searchCountry( param: string, value: string  ): Observable<Country[]> {
    
    const url = `${ this.serviceURL }/${param}/${ value }`;
    return this.http.get<Country[]>( url )
                    .pipe( 
                      catchError( () => of([]) )
                     );
  }

  searchByIdCountry( idCountry: string ): Observable<Country | null> {
    
    const url = `${ this.serviceURL }/alpha/${ idCountry }`;
    
    return this.http.get<Country[]>( url )
                    .pipe( 
                      map( countries => countries.length > 0 ? countries[0] : null ),
                      catchError( () => of(null) )
                     );
  }
}