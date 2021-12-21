import { FC, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Countries, Country } from '../../services/countries.interfaces';

import AppHeader from '../../components/app-header/app-header.fc';
import CountryList from '../../components/country-list/country-list.fc';
import SearchBar from '../../components/search-bar/search-bar.fc';

import './countries.styles.css'
import FilterSelect from '../../components/filter-select/filter-select.fc';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
      currency
    }
  }
`;

const CoutriesPage: FC = () => {
  const [countryName, setCountryName] = useState('');
  const [ continentName, setContinentName ] = useState('');
  const [ currencyName, setCurrencyName ] = useState('');

  const [continents, setContinents] = useState<string[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);

  const {data, loading, error} = useQuery<Countries>(LIST_COUNTRIES);

  useEffect(() => {
    if(!loading && data) {
      const filterArray = data.countries.filter((country) => {
        const matchName = country.name.toLowerCase().includes(countryName.toLowerCase());
        const matchContinent = country.continent.name.toLowerCase().includes(continentName.toLowerCase());

        const splitedCurrency = country.currency ? country.currency.split(",") : []
        const matchCurrency = currencyName != '' ? splitedCurrency.some(val => val == currencyName) : true;

        return matchName && matchContinent && matchCurrency;
      });

      const continentsArr = data.countries.reduce<string[]>((acc, country) => {
        return Array.from(new Set<string>([...acc, country.continent.name]));
      }, []);

      const currenciesArr = data.countries.reduce<string[]>((acc, country) => {
        return country.currency ? Array.from(new Set<string>([...acc, ...country.currency.split(",")])) : acc;
      }, []);

      setContinents(continentsArr.sort());
      setCurrencies(currenciesArr.sort());
      setCountries(filterArray);
    }
  }, [loading, data, countryName, continentName, currencyName])

  const handleOnChangeCountry = (countryToSearch: string) => {
    setCountryName(countryToSearch);
  }

  const handleOnChangeContinent = (continentToSearch: string) => {
    setContinentName(continentToSearch);
  }

  const handleOnChangeCurrency = (currencyToSearch: string) => {
    setCurrencyName(currencyToSearch);
  }

  return (
    <>
      <AppHeader title='APLICACIÓN DE PAISES' />
      <div className='countries-content'>
        <SearchBar countryName={countryName} handleOnChange={handleOnChangeCountry} />
        <div className='filters'>
          <FilterSelect filterOptions={continents} handleOnChange={handleOnChangeContinent}/>
          <FilterSelect filterOptions={currencies} handleOnChange={handleOnChangeCurrency}/>
        </div>
        {
          loading || error
          ? <p className='message'>{error ? error.message : 'Cargando...'}</p>
          : <CountryList countries={countries}/>
        }
      </div>
    </>
  );
};

export default CoutriesPage;