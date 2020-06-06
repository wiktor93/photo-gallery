import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import initialImageArray from '../assets/initialImageArray';
import AddImagePanel from './AddImagePanel';
import ImageContainer from './ImageContainer';
import Slider from './Slider';

const SyledWraper = styled.div`
  padding: 25px 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [images, setImages] = useState(initialImageArray);
  const [inputValue, setInputValue] = useState('');

  function handleKeyboardControls({keyCode}) {
    if (keyCode === 39 && selectedImgIndex < images.length - 1) {
      setSelectedImgIndex(selectedImgIndex + 1);
    }
    if (keyCode === 37 && selectedImgIndex > 0) {
      setSelectedImgIndex(selectedImgIndex - 1);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardControls);
    return () => {
      window.removeEventListener('keydown', handleKeyboardControls);
    };
    // eslint-disable-next-line
  }, [selectedImgIndex]);

  return (
    <SyledWraper>
      <h1>Simple Photo Gallery</h1>

      <AddImagePanel
        images={images}
        setImages={setImages}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <ImageContainer
        image={images[selectedImgIndex]}
        imgIndex={selectedImgIndex}
      />

      <Slider
        images={images}
        selectedImgIndex={selectedImgIndex}
        setSelectedImgIndex={setSelectedImgIndex}
      />
    </SyledWraper>
  );
}

export default App;
