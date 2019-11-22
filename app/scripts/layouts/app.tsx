import React from 'react';
import { Counter } from '../components/counter';
import { Hello } from '../components/hello';

export const App = () => (
  <div className="flex-center full-height">
    <Hello name={'BalmJS'} />
    <Counter />
  </div>
);
