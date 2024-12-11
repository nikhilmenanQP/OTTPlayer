import MoviesScreenTemplate from '@components/templates/MovieScreenTemplate';
import React from 'react';
import {MoviesScreenProps} from './types';
import {movieScreenData} from '../../../dummyDataPreProd/MoviesScreen';

const MoviesScreen: React.FC<MoviesScreenProps> = ({}) => {
  return <MoviesScreenTemplate data={movieScreenData} />;
};

export default MoviesScreen;
