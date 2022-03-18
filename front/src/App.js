import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Login from './Login';
import Profile from './Profile';
import { Link, BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
           <Link to="/profile">프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Main} exact/>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </div>
    </BrowserRouter>
  );
}

export default App;
