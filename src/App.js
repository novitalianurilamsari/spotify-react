import React, { useEffect } from 'react';
import SPOTIFY_DATA from './datalist';

const URL =
  'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json';

const { name: judul, artists, album } = SPOTIFY_DATA;

//mendapatkan data
const getSongs = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    // menampilkan data
    console.log(data);
    return data;
  } catch (error) {
    // akan muncul alert error
    alert(error);
    return error;
  }
};

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_LIST;

function App() {
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    getSongs();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Create Playlist<span>...</span></h1>
      <h2 className="title2">now you can create your own playlist for free</h2>
      
      <div className="songs-container">
        <h2 className="title">Recently Played</h2>
        <div className="contains">
        <div class="songs-item">
          <img
            className="album-image"
            src={album.images[0].url}
            alt={judul}
          />
          <div className="content">
            <h2 className="text-title">{judul}</h2>
            <h3 className="text-artist">
              {artists.map((artist) => artist.name).join(', ')}
            </h3>
            <h3 className="text-album">{album.name}</h3>
          </div>
        
          <div className="button-actions">
            <button type="btn-data" className="btn">
              Select
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4 className="copyright">Homework4_KM-G2FE3045_Novita Lia NS</h4>
      </div>
    </div>

  );
}

export default App;
