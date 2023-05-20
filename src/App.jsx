import React from 'react';
import Profile from './component/profile/profile';
import './App.css';
import phoyo from './component/profile/img/20456790.jpeg'
function App() {
  return (
    <div className="App">
      <Profile
        fullName="Rilliane D'Autriche"
        bio="daughter of evil"
        profession="Queen"
      >
        <img
          src={phoyo}
          alt="Profile"
          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
}

export default App;
