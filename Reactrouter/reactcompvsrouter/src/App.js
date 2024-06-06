import React from 'react';
import { Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Services from './Services';

const App = () => {
  const Name=()=>{
    return <h1>hii name page</h1>
  }
  return (
    <>

    <Menu/>
      <Routes>
      {/* <Switch></Switch> renders first path in /contact/name only focus on contact*/}
      {/* component and render me diff na rahe usake liye ye dono elements se replace kar diye gae h */}
      <Route exact path='/' element={<About name="John" />} />
      {/* pasing the props here */}
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />
        <Route path='/services' element={<Services name="Servi" />} />
        <Route path='/*' element={<Error/>} />
 </Routes>
    </>
  );
};

export default App;
