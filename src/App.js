import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import Tutorial from './pages/Tutorial';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/homepage" element= {<HomePage />}> </Route>
            <Route path="/" element= {<Login />}> </Route>
            <Route path="/shop" element= {<OrderPage />}></Route>
            <Route path="/register" element= {<RegistrationPage />}></Route>
            <Route path="/tutorial" element= {<Tutorial />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
