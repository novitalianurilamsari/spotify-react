import SongsItem from './SongsItem';
import { SPOTIFY_DATA } from '../data';

function SongsContainer() {
  /**
   * @returns 
   */
  function renderSongsItems() {
    
    return SPOTIFY_DATA.map((item) => {
      const { id, album, name: judulLagu, artists } = item;
      return (
        <SongsItem
          key={id}
          image={album.images[0]?.url}
          judulLagu={judulLagu}
          albumName={album.name}
          artists={artists}
        />
      );
    });
  }

  return <div className="songs-container">{renderSongsItems()}</div>;
}

export default SongsContainer;