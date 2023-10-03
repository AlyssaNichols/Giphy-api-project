import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const random = useSelector((store) => store.random);

  useEffect(() => {
    getRandomGif();
  }, []);

  const getRandomGif = () => {
    axios({
      method: "GET",
      url: "/random/limit",
    })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_RANDOM", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };

  // Check if random and its properties exist before rendering
  // if (
  //   !random ||
  //   !random.data ||
  //   !random.data.images ||
  //   !random.data.images.original ||
  //   !random.data.images.original.url
  // ) {
  //   return (
  //     <div>
  //       <header className="App-header">
  //         <h1>Random Giphy API</h1>
  //         <button onClick={getRandomGif}>Refresh</button>
  //       </header>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // } this is the same thing as line 53 essentially

  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
        <button onClick={getRandomGif}>Refresh</button>
      </header>
      {random.data !== undefined && (
        <img src={random.data.images.original.url} alt="Random Gif" />
      )}
      {random.data !== undefined && <p>Title: {random.data.title}</p>}
      {random.data !== undefined && <p>Rating: {random.data.rating}</p>}
      <br />
    </div>
  );
}

export default App;
