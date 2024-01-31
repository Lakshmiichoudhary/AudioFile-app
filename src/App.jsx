import React, { useState, useEffect, useRef } from 'react';
import Playlist from './Components/Playlist';
import NowPlaying from './Components/NowPlaying';
import InputFile from './Components/InputFile';

const App = () => {
  const [playlist, setPlaylist] = useState([
    { name: 'Music 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', isYouTube: false },
  ]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const lastPlayedFileIndex = localStorage.getItem('lastPlayedFileIndex');
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist'));

    if (lastPlayedFileIndex !== null && storedPlaylist !== null) {
      setCurrentFileIndex(parseInt(lastPlayedFileIndex, 10));
      setPlaylist(storedPlaylist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }, [playlist]);

  useEffect(() => {
    localStorage.setItem('lastPlayedFileIndex', currentFileIndex.toString());
  }, [currentFileIndex]);

  const handlePlay = (index) => {
    setCurrentFileIndex(index);
  };

  const handlePlaybackEnd = () => {
    setCurrentFileIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handleFileUpload = (file) => {
    if (playlist.some((item) => item.name === file.name)) {
      alert('File already in playlist');
      return;
    }

    setPlaylist((prevPlaylist) => [
      ...prevPlaylist,
      { name: file.name, src: URL.createObjectURL(file), isYouTube: false },
    ]);
  };

  const handleAudioEnded = () => {
    handlePlaybackEnd();
    audioRef.current.load();
    audioRef.current.play();
  };

  return (
    <div>
      <InputFile onFileChange={handleFileUpload} />
      <Playlist playlist={playlist} onPlay={handlePlay} />
      <NowPlaying currentFile={playlist[currentFileIndex]} />
      <audio className='p-2  bg-slate-600 w-full'
        ref={audioRef}
        controls
        src={playlist[currentFileIndex]?.src}
        onEnded={handleAudioEnded}
      />
    </div>
  );
};

export default App;
