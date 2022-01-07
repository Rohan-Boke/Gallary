import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { app } from "./firebase/config";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      Hello
       <Title/>
       <ImageGrid setSelectedImg={setSelectedImg} />
        <UploadForm />
      { selectedImg && (  
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;