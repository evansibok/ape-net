import { useState } from 'react';

import ApeNetContext from './contexts/ApeNetContext'
import Routes from './routes.js';

function App() {

  const [user, setUser] = useState({
    first_name: '',
    email: ''
  })

  return (
    <div className="App">
      <ApeNetContext.Provider
        value={{
          user,
          setUser
        }}
      >
        <Routes />
      </ApeNetContext.Provider>
    </div>
  );
}

export default App;
