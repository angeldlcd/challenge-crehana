import { FC } from 'react';

import AppHeaderProps from './app-header.interfaces';

import './app-header.styles.css'

const AppHeader: FC<AppHeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default AppHeader;