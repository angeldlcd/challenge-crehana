import { FC } from 'react';

import SearchBarProps from './search-bar.interfaces';

import './search-bar.styles.css'

const SearchBar: FC<SearchBarProps> = ({ countryName, handleOnChange }) => {
  return (
    <div className='search-bar-wrapper'>
      <input
        className='search-bar'
        placeholder='¿Qué país desea buscar hoy?'
        type='search'
        onChange={e => handleOnChange(e.target.value)}
        value={countryName}
      />
    </div>
  );
};

export default SearchBar;