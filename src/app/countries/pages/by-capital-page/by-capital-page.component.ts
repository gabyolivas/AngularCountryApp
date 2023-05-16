import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})

export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCapital( value: string ) : void {
    
  this.countriesService.searchCountry( "capital", value )
                        .subscribe( countries => {
                            this.countries = countries;
                        } )
  }

}
