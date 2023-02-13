import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReviewPage from './pages/ReviewPage';
import RegistrationPage from './pages/RegistrationPage';
import Tutorial from './pages/Tutorial';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import CategoryPage from './pages/CategoryPage'; 
import {useState} from 'react';



function App() {
  const [setQuestion] = useState([]); 
  
  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/homepage" element= {<HomePage/>}> </Route>
            <Route path="/" element= {<Login />}> </Route>
            <Route path="/questions" element = {<ReviewPage setQuestion = {setQuestion}/>}/>
            <Route path="/register" element= {<RegistrationPage />}></Route>
            <Route path="/tutorial" element= {<Tutorial />}></Route>
            <Route path="/category" element= {<CategoryPage />}></Route>
          </Routes>
        </Router>
      </header>
      
    </div>
  );
}

export default App;



