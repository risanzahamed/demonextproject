import React from 'react';
import About from './components/About/About';
import Location from './components/Location/Location';
import Services from './components/Service/Services';

import Blog from './components/Blog/Blog';



const check = () => {
  return (
    <div>
   
      <About></About>
       <Blog></Blog>
      <Location></Location>
      <Services></Services>
    </div>
  );
};

export default check;