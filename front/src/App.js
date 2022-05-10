import miniun from './miniun.png';
import loginImg from './loginImg.png';
import './App.css';
import Mainpage from './Mainpage.js';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios'

function App() {
    const [ name, setName ] = useState('init');
    const [ mail, setMail ] = useState('init');

    const API_BASE_URL = 'http://localhost:8080';
    const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorization/google';

    const btnStyle = {
      position: 'absolute',
      top: '300px',
      left : '930px'
    }

    const imgStyle = {
      position: 'relative'
    }

    function LoginBtn(){
        return (
            <div>
                <img src={miniun}  alt="logo" style={imgStyle} />
                <a href={GOOGLE_AUTH_URL} style={btnStyle}> <img className="login_btn" src={loginImg} alt="" /> </a>
            </div>
        )
    }

    const Mainrender = (props) => {
        const name = props.name;
        const mail = props.mail;
        return (
            <Mainpage  name={name} mail={mail}/>
        )
    }

    function Greeting(props){
        const name = props.name;
        const mail = props.mail;
        if(mail === null || mail === "" ||mail === "init"){
            return <LoginBtn />;
        }else{
            return <Mainrender name={name} mail={mail} />
        }
    }

    function callbackSession(data) {
        setName(data.name);
        setMail(data.mail);
    }
    useEffect(
        () => {
          axios({
              url: '/hello',
              method: 'GET'
          }).then((res) => {
              callbackSession(res.data);
          })
        }, []
    );


   return (
       <div className="App">
           <Greeting  name={name} mail={mail}/>
       </div>
       );
   }

   export default App;
