/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './index.css';
import { Button, Link } from '@mui/material/Button';

function ButtonCompo({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="ButtonContainer">
      <Link href={link}>
        <Button
          className="buttonSelect"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? 'Deselect' : name}
        </Button>
      </Link>
    </div>
  );
}

export default ButtonCompo;
