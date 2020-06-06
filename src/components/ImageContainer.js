import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {imageContainerFullScreen} from '../styles/styledMixins';
import ModalCloseButton from './ModalCloseButton';

const StyledImageContainer = styled.div`
  margin: 25px 0;
  height: 60vh;
  min-height: 300px;
  max-height: 640px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({fullScreen}) => (fullScreen ? imageContainerFullScreen : null)}
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: scale-down;
    cursor: pointer;
  }
`;

function ImageContainer({image, imgIndex}) {
  const [fullScreen, setFullScreen] = useState(false);

  function handleModalClose({keyCode}) {
    if (keyCode === 27 && fullScreen) setFullScreen(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);
    return () => {
      window.removeEventListener('keydown', handleModalClose);
    };
    // eslint-disable-next-line
  }, [fullScreen]);

  return (
    <StyledImageContainer fullScreen={fullScreen}>
      <img
        src={image}
        alt={`Zdjęcie nr ${imgIndex} `}
        onClick={() => setFullScreen(!fullScreen)}
      />
      <ModalCloseButton fullScreen={fullScreen} setFullScreen={setFullScreen} />
    </StyledImageContainer>
  );
}
export default ImageContainer;
