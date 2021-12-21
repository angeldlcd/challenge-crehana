import { FC, useState } from 'react';

import './algorithm.styles.css';

const AlgorithmPage: FC = () => {
  const [arrayString, setArrayString] = useState('');
  const [validData, setValidData] = useState(false);
  const [soldMessage, setSoldMessage] = useState('');

  const handleOnChange = (stringData: string) => {
    const splittedData = stringData.split(',');

    if (!['25', '50', '100'].includes(splittedData[splittedData.length - 1].trim())) {
      setValidData(false);
      return;
    }

    for (const data of splittedData) {
      if (!['25', '50', '100'].includes(data.trim())) {
        setValidData(false);
        return;
      }
    }

    setSoldMessage('');
    setValidData(true);
    setArrayString(stringData);
  }

  const checkData = () => {
    if (!validData) {
      setSoldMessage('Los datos no son válidos');
      return;
    }

    let dict: { [key: string]: number } = {};

    const splittedData = arrayString.split(',').map<number>(x => +x.trim());

    for (const ticket of splittedData) {
      if (ticket.toString() in dict) {
        ++dict[ticket.toString()];
      } else {
        dict[ticket.toString()] = 1;
      }

      if (ticket === 100) {
        if (dict['50'] >= 1 && dict['25'] >= 1) {
          --dict['50'];
        } else if (dict['25'] >= 2) {
          dict[25] -= 2;
        } else {
          setSoldMessage('NO');
          return;
        }
      }

      if (ticket === 50) {
        if (dict['25'] >= 1) {
          --dict['25'];
        } else {
          setSoldMessage('NO');
          return;
        }
      }
    }

    setSoldMessage('SI')
  }

  return(
    <div className='algorithm-wrapper'>
      <div className='algorithm-card'>
        <p className='instructions'>Ingrese los billetes separados por comas, por ejemplo: 25, 50, 100</p>
        <textarea
          name='data'
          id='data'
          cols={30}
          rows={10}
          placeholder='25, 50, 100'
          onChange={e => handleOnChange(e.target.value)}
        />
        <button onClick={checkData}>Verificar</button>
        <p className='verification-message'>{soldMessage}</p>
      </div> 
    </div>
  );
};

export default AlgorithmPage;