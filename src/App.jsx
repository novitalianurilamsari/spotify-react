import SongsContainer from './components/SongsContainer';
import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';


function App() {
  const SPOTIFY_CLIENT_ID = "f445924d83704224a7bda9d74460c013"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])


    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      // getToken()


      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }

  const searchArtists = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "artist"
          }
      })

      setArtists(data.artists.items)
  }

  const renderArtists = () => {
      return artists.map(artist => (
          <div key={artist.id}>
              {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
              {artist.name}
          </div>
      ))
  }
  
  return (
    <div className="App">
    <div className="App-header">
      <h1 className="title">Create Playlist<span>...</span></h1>
      <h2 className="title2">now you can create your own playlist for free</h2>
      

        {!token ?
        
            <a href={`${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                to Spotify</a>
                
            : <button onClick={logout}>Logout</button>}
                  

        {token ?
            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

            : <h6>Please login</h6>
        }

        {renderArtists()}
        <SongsContainer/>
        
    </div>
    <div className="footer">
        <h4 className="copyright">Homework6_KM-G2FE3045_Novita Lia NS</h4>
    </div>
</div>
);
}



export default App;
