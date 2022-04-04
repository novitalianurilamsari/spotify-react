import SongsItem from '../SongItem';
import { SPOTIFY_DATA } from '../../data';

function SongsContainer({ tracks, onSelectTrack, selectedTracks }) {
  function renderSongsItems() {
    
    return SPOTIFY_DATA.map((item) => {
      const { uri } = item;
      return (
        <SongsItem
          key={uri}
          track={item}
          onSelectTrack={onSelectTrack}
          isSelected={selectedTracks.includes(uri)}
        />
      );
    });
  }

  return <div className="songs-container">{renderSongsItems()}</div>;
}

export default SongsContainer;