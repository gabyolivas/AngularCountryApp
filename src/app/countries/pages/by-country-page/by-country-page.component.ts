import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByName( value: string ) : void {
    
    this.countriesService.searchCountry( "name", value )
                        .subscribe( countries => {
                            this.countries = countries;
                        } )
  }

}
