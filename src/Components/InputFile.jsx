import React from 'react';

const InputFile = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileChange(selectedFile);
  };

  return (
    <div className='p-2 bg-slate-950 text-white md:flex justify-between'>
      <div className='p-2 font-semibold text-2xl '>
        Audio Flow
      </div>
      <div className='md:flex '>
      <h1 className='p-2 font-bold'>Add you Audio File</h1>
      <input className='p-2' type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default InputFile;
