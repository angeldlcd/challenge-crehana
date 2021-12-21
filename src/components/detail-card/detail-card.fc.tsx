import { FC } from 'react';
import Flag from 'react-world-flags';
import { Language } from '../../services/countries.interfaces';
import DetailCardProps from './detail-card.interfaces';

import './detail-card.styles.css'

const DetailCard: FC<DetailCardProps> = ({ country }) => {
  const reducer = (acc: string, prev: Language) => (acc + ' ' + prev.name).trim();

  return(
    <div className='detail-card-wrapper'>
      <div className='detail-card'>
        {
          country
          ? (
            <>
              <Flag code={country.code}></Flag>
              <p>{ country.name}</p>
              <p>{ country.capital}</p>
              <p>{ country.code}</p>
              <p>{ country.currency}</p>
              <p>{ country.continent.name}</p>
              <div>{ country.languages.reduce<string>(reducer, '')}</div>
            </>
          )
          : <div>País no encontrado</div>
        }
      </div>
    </div>
  );
};

export default DetailCard;