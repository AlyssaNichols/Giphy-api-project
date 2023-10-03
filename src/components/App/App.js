import React from 'react';
import axios from "axios";
import './App.css';

function App() {
  // Renders the entire app on the DOM
  axios({
    method: "GET",
    url: "/random/",
  })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "SET_RANDOM", payload: response.data });
    })
    .catch((error) => {
      console.log("error on GET", error);
    });


  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      
      <p>Results go here</p>
    </div>
  );
}

export default App;
