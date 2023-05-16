import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( value: string ) : void {
    
  this.countriesService.searchCountry( "region", value )
                        .subscribe( countries => {
                            this.countries = countries;
                        } )
  }
}
