import React from "react";
import "./index.css";
import Button from '@mui/material/Button';

function PlaylistForm({ titleValue, descValue, handleSubmit, onChange }) {
  return (
    <div className="PlaylistForm">
      <form onSubmit={handleSubmit}>
        <input
          className="InputFormTitle"
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
        />
        <input
          className="InputFormDesc"
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
        />
        <Button className="CreateButton" type="submit" color="primary">
          Create
        </Button>
      </form>
    </div>
  );
}

export default PlaylistForm;
