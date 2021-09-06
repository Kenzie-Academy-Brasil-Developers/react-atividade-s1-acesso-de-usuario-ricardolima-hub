import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RestrictedPage from './components';

function App() {
  
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  const user = "Ricardo";

  const login = () => setIsLoggenIn(true)

  const logout = () => setIsLoggenIn(false)

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} login={login} logout={logout}/>
      </header>
    </div>
  );
}

export default App;
