import React from 'react';
import logo from './logo.svg';
import './App.css';
import "mdb-ui-kit/css/mdb.min.css"

function App() {



  return (
    <div className="App">
        <button className="btn btn-success" onClick={() => console.log("click")}>
            hello
        </button>
    </div>
  );
}

export default App;
