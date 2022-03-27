function Track({ image, judulLagu, album, artists }) {
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
          <h3 className="text-album">{album}</h3>
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
