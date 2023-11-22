import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import PersonalDets from './Components/PersonalDets';
import PageNotFound from './Components/PageNotFound';
import Education from './Components/Education';
import Profession from './Components/Profession';
import Experiences from './Components/Experiences';


function RouteMapping() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/personal' element={<PersonalDets />} />
      <Route path='/details/education' element={<Education />} />
      <Route path='/details/profession' element={<Profession />} />
      <Route path='/details/experiences' element={<Experiences />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  )
}
export default RouteMapping;