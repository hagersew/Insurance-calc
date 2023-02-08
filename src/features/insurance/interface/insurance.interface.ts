import { CountryCurrency } from '../models/insurance.model';

export interface Insurance {
  name?: string;
  age?: number;
  country?: string;
  package?: string;
  premium?: number;
  safePackage?: number;
  superPackage?: number;
}

export interface Country {
  HKD: CountryCurrency.Hong_Kong;
  USD: CountryCurrency.USA;
  AUD: CountryCurrency.Australia;
}
