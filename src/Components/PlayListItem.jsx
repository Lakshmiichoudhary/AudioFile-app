import React from 'react';

const PlayListItem = ({ file, onPlay, index }) => {
  const playFile = () => {
    onPlay(index);
  };

  return (
    <div>
      <span>{file.name}</span>
      <button onClick={playFile}>Play</button>
    </div>
  );
};

export default PlayListItem;
