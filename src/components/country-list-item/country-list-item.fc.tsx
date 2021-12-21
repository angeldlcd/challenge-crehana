import { FC } from 'react';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';
import CountryListItemProps from './country-list-item.interfaces';

import './country-list-item.styles.css'

const CountryListItem: FC<CountryListItemProps> = ({ name, code }) => {
  return (
    <Link to={`/details/${code}`}>
      <div className='country-list-item'>
        <Flag code={code} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default CountryListItem;