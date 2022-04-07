import './App.css';
import MyRouter from "./config/router";


function App() {
  console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
