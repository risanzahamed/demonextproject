import React from 'react';
import About from './components/About/About';
import Location from './components/Location/Location';
import Services from './components/Service/Services';

const check = () => {
  return (
    <div>
      <About></About>
      <Location></Location>
      <Services></Services>
    </div>
  );
};

export default check;