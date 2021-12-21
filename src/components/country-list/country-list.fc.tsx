import { FC, useState } from 'react';
import {gql, useQuery} from '@apollo/client';

import CountryListProps from './country-list.interfaces';

import CountryListItem from '../country-list-item/country-list-item.fc';

import './country-list.styles.css'

const CountryList: FC<CountryListProps> = ({ countries }) => {
  return (
    <div className='country-list'>
      {
        countries ? countries.map(({ name, code }) => (
          <CountryListItem name={name} code={code} key={code}/>
        )) : <div>none</div>
      }
    </div>
  );
};

export default CountryList;