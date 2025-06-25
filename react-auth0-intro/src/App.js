import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/profile';
import LogautButton from './components/LogoutButton';
import Index from './components/Index'
import { BrowserRouter as router, Routes, Route, Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const {isAuthenticated, isLoading} = useAuth0()

  if (isLoading) return <h1>Cargando...</h1>

  return (
    <div className="App">
      {isAuthenticated ? <LogautButton/> : <LoginButton/>}
      <Profile/>
    </div>

  );
}

export default App;
