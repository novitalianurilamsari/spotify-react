import './App.css';
import React from "react";
import MyRouter from "./config/routes";

function App() {
  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

  return (
    <div className="App">
      <h1 className="title">Create Playlist<span>...</span></h1>
      <h2 className="title2">now you can create your own playlist for free</h2>
  
      <MyRouter />
      <h4 className="copyright">Homework Modul 5 Sesi 1_KM-G2FE3045_Novita Lia NS</h4>
    </div>
  );
}

export default App;
