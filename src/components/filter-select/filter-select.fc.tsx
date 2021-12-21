import { FC } from 'react';
import FilterSelectProps from './filter-select.interfaces';

import './filter-select.styles.css'

const FilterSelect: FC<FilterSelectProps> = ({ filterOptions, handleOnChange }) => {
  return (
    <select onChange={e => handleOnChange(e.target.value)}>
      <option value="">--Continente--</option>
      {
        filterOptions.map((continent, idx) => (
          <option key={`continet-${idx}`} value={continent}>{continent}</option>
        ))
      }
    </select>
  );
};

export default FilterSelect;