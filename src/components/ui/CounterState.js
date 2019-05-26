import React from 'react';
import { Counter } from './styledComponents/Counter';

const CounterState = ({ count, label }) => (
  <Counter>
    {label} {count}
  </Counter>
);

export default CounterState;
