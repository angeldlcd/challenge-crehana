
export interface Continent {
  name: string;
}

export interface Countries {
  countries: Country[];
}

export interface Country {
  name: string;
  code: string;
  continent: Continent;
  currency: string;
}

export interface SearchedCountry {
  country?: DetailedCountry;
}

export interface DetailedCountry {
  name: string;
  code: string;
  continent: Continent;
  currency: string;
  capital: string;
  languages: Language[];
}

export interface Language {
  name: string;
}

export interface SearchCountryVars {
  code: string;
}