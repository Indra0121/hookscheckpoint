import React from 'react'
import './App.css'
import Fullname from './component/profile/fullname.jsx'
import Profilephoto from './component/profile/profilephoto.jsx';
import Adresse from './component/profile/adresse.jsx'
const App = () => {
  return (
    <>
    <div>
    <Profilephoto />
    <Fullname />
    <Adresse />
    </div>
    </>
  )
}

export default App