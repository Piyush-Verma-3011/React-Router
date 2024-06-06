import React from 'react'

import { Route,Routes } from 'react-router-dom';
import User from './User';
import Menu from './Menu'

const App = () => {
  return (
    <>
    <Menu/>
<Routes>
  {/* useParams is used to add additional info which is dynamically enterd by the user and added to url and fet
   useParams hook is used to access the parameters from the URL.*/}
  <Route path='/user/:fname/:lname' element={<User/>}/>
</Routes>
    </>
  )
}

export default App