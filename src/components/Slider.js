import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import getLastMovableThumbIndex from '../utils/getLastMovableThumbIndex';
import useCheckScreenWidth from '../utils/useCheckScreenWidth';

const SliderWraper = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  svg {
    margin: 5px;
    height: 24px;
    align-self: center;
    cursor: pointer;
  }
  .disabled {
    fill: rgba(0, 0, 0, 0.3);
    cursor: auto;
  }
`;
const ThumbnailsContainer = styled.div`
  height: 100%;
  max-width: 500px;
  overflow-x: hidden;
  div {
    display: flex;
    height: 100%;
    transform: ${({thumbnailsToMove}) =>
      `translateX(-${thumbnailsToMove * 100}px)`};
    transition: 0.3s ease;
  }
  picture {
    cursor: pointer;
    position: relative;

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      left: 1px;
      right: 1px;
      top: 0;
      height: 2px;
      background-color: black;
      transition: 0.3s;
    }
    &.active::before {
      opacity: 1;
    }
    &:hover::before {
      opacity: 1;
    }

    img {
      padding: 0 1px;
      width: 100px;
      height: 75px;
      object-fit: cover;
    }
  }
`;

function Slider(props) {
  const {images, selectedImgIndex, setSelectedImgIndex} = props;
  const thumbnailsToMove = getLastMovableThumbIndex(images, selectedImgIndex);
  const isScreenMobile = useCheckScreenWidth();

  function handleImageChange(action, index) {
    if (action === 'forward' && selectedImgIndex < images.length - 1) {
      setSelectedImgIndex(selectedImgIndex + 1);
    }
    if (action === 'backward' && selectedImgIndex > 0) {
      setSelectedImgIndex(selectedImgIndex - 1);
    }
    if (action === 'pick') setSelectedImgIndex(index);
  }
  return (
    <SliderWraper>
      <ArrowBackIosIcon
        className={selectedImgIndex ? null : 'disabled'}
        onClick={() => handleImageChange('backward')}
      />
      {isScreenMobile ? (
        <div>{`${selectedImgIndex + 1} z ${images.length}`}</div>
      ) : (
        <ThumbnailsContainer thumbnailsToMove={thumbnailsToMove}>
          <div>
            {images.map((image, i) => (
              <picture
                key={i}
                className={selectedImgIndex === i ? 'active' : null}
              >
                <img
                  src={image}
                  alt={`Zdjęcie nr ${i} `}
                  onClick={() => handleImageChange('pick', i)}
                />
              </picture>
            ))}
          </div>
        </ThumbnailsContainer>
      )}

      <ArrowForwardIosIcon
        className={selectedImgIndex === images.length - 1 ? 'disabled' : null}
        onClick={() => handleImageChange('forward')}
      />
    </SliderWraper>
  );
}
export default Slider;
