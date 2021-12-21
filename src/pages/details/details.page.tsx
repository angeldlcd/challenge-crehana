import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { SearchCountryVars, SearchedCountry } from '../../services/countries.interfaces';

import AppHeader from '../../components/app-header/app-header.fc';
import DetailCard from '../../components/detail-card/detail-card.fc';

import './details.styles.css'

const GET_COUNTRY_BY_CODE = gql`
  query MyQuery($code: ID!) {
    country(code: $code) {
      name
      code
      continent {
        name
      }
      currency
      languages {
        name
      }
      capital
    }
  }
`;

const DetailsPage: FC = () => {
  const { code } = useParams();
  const {data, loading, error} = useQuery<SearchedCountry, SearchCountryVars>(GET_COUNTRY_BY_CODE, {
    variables: { code: code ? code : ""}
  });

  return (
    <div>
      <AppHeader title={data && data.country ? data.country.name : ''}/>
      {
          loading || error
          ? <p className='message'>{error ? error.message : 'Cargando...'}</p>
          : <DetailCard country={data?.country}/>
        }
    </div>
  );
};

export default DetailsPage;