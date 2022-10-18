import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { SearchProvider } from './contexts/SearchContext';

import './styles/reset.scss';
import './styles/global.scss';

export const App = () => {
  return (
    <SearchProvider>
      <HomePage />
    </SearchProvider>
  );
}

