import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
    const [ testStr, setTestStr ] = useState('');

    // 변수 초기화확인
    function callback(str) {
    setTestStr(str);
    }

    // 첫 번째 렌더링을 마친 후 실행
    useEffect(
        () => {
          axios({
              url: '/hello',
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {testStr}
      </header>
    </div>
    );
}

export default App;
