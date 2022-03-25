function Track({ image, judulName, albumName, artists }) {
    return (
        <div class="songs-item">
          <img className="album-image" 
            src={image}
            alt={judulName}
          />
          <div className="content">
            <h2 className="text-title">{judulName}</h2>
            <h3 className="text-artist">
              {artists.map((artist) => artist.name).join(', ')}
            </h3>
            <h3 className="text-album">{albumName}</h3>
          </div>
          <div className="button-actions">
            <button type="btn-data" className="btn">
              Select
            </button>
        </div>
    </div>
  );
}

export default Track;
