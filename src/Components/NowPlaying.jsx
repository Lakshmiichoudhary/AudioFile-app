import React from 'react';

const NowPlaying = ({ currentFile }) => {
  return (
    <div className='p-2 font-medium'>
      <h2 className='p-2 m-2 bg-slate-500 w-40 text-center rounded-lg'>
        Now Playing
      </h2>
      {currentFile ? <p className='m-2 p-2'>{currentFile.name}</p> : <p>No file playing</p>}
    </div>
  );
};

export default NowPlaying;
