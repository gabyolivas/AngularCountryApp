import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})

export class CountryTableComponent {

    @Input()
    public countries: Country[] = [];

    noCountries(): boolean {
      return this.countries.length === 0;
    }

  }
