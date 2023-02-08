import { CountryType } from '../models/insurance.model';

export interface Insurance {
  name?: string;
  age?: number;
  country?: string;
  package?: string;
  premium?: string;
}

export interface Country {
  HKD: CountryType.Hong_Kong;
  USD: CountryType.USA;
  AUD: CountryType.Australia;
}
