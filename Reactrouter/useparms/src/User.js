import React from 'react'
import {useParams,useLocation} from 'react-router-dom'

const User = () => {

   const {fname,lname}=useParams();

//    { } is used in place of [] beacuse it could have more than one value

   // use to fetch the current location use the useLocation hook
   const Location= useLocation();

  return (<>
    <h1>hiii i'm {fname} {lname}</h1>
    <h1>you are present at {Location.pathname}</h1>
    {/* if someone entered the desired location then i have to show a button 
    this can be used to show the content to the premium use for eg */}
    {
        Location.pathname==='/user/chinku/hi'?(<button>click me</button>):null
    }
    </>
  )
}

export default User