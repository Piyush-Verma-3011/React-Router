import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Sevices from './Sevices';

const App = () => {
  const Name=()=>{
    return <h1>hii name page</h1>
  }
  return (
    <>

    <Menu/>
      <Routes>
      {/* <Switch></Switch> renders first path in /contact/name only focus on contact*/}
      <Route exact path='/' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />
        <Route path='/services' element={<Sevices/>} />
        <Route path='/*' element={<Error/>} />
 </Routes>
    </>
  );
};

export default App;
