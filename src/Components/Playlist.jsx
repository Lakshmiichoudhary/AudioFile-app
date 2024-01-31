import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ playlist, onPlay }) => {
  return (
    <div className='p-2 font-medium border-b-2 border-black m-2'>
      <h2 className='p-2 bg-slate-500 m-2 w-24 text-center rounded-lg'>
        Playlist
      </h2>
      {playlist.map((file, index) => (
      <PlayListItem
        className="m-4 p-2"
        key={index}
        index={index}
        file={file}
        onPlay={onPlay}
      />
    ))}
    </div>
  );
};

export default Playlist;
