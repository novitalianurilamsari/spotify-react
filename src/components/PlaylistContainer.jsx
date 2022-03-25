import PlaylistItem from './PlaylistItem';

import { SPOTIFY_DATA } from '../pages';

const { album, name: judulName, artists } = SPOTIFY_DATA;

function PlaylistContainer() {
  return (
    <div className="songs-container">
    <h2 className="title">Recently Played</h2>
      <div className="contains">
        <PlaylistItem
          image={album?.images[0]?.url}
          judulName={judulName}
          albumName={album?.name}
          artists={artists}
        />
      </div>
    </div>
  );
}

export default PlaylistContainer;
