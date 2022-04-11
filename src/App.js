import './App.css';
import React from "react";
import MyRouter from "./config/routes";

function App() {
  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
