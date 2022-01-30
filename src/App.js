import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { app } from "./firebase/config";
import Header from './comps/Header/Header';
import Footer from './comps/Footer/Footer';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
        <Header/>
       <Title/>
       <ImageGrid setSelectedImg={setSelectedImg} />
        <UploadForm />
      { selectedImg && (  
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer/>
    </div>
  );
}

export default App;