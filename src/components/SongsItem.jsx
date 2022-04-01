import React from 'react';
import { useState } from 'react';

function Track(status,pushToSelectedList,deleteFromSelectedList,id,image,judulLagu,albumName,artists) {

    const [statusState,setStatusState] = useState(status)
  
    const showAlert = () => {
        setStatusState(!statusState)
        if (!statusState){
            pushToSelectedList(id);
        } else {
            deleteFromSelectedList(id);
        }
    }
  
  return (
      <div class="songs-item">
        <img className="album-image" 
          src={image}
          alt={judulLagu}
        />
        <div className="content">
          <h2 className="text-title">{judulLagu}</h2>
          <h3 className="text-artist">
            {artists.map((artist) => artist.name).join(', ')}
          </h3>
          <h3 className="text-album">{albumName}</h3>
        </div>
        <div className="button-actions">
          if (statusState === false){
            <button type="btn-data" className="btn" onClick={showAlert}>Select</button>
          } else {
            <button type="btn-data" className="btn" onClick={showAlert}>Deselect</button>
            }
      </div>
  </div>
);
}

export default Track;
