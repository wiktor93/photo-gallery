import React from 'react';
import styled from 'styled-components';
import {TextField, Button} from '@material-ui/core';

const StyledAddImgPanel = styled.div`
  margin-top: 25px;
  button {
    font-size: inherit;
    margin-left: 15px;
    height: 56px;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.6);
  }
`;

function AddImagePanel({inputValue, setInputValue, images, setImages}) {
  function handleAddImage() {
    if (inputValue) {
      setImages([...images, inputValue]);
      setInputValue('');
    }
  }

  return (
    <StyledAddImgPanel>
      <TextField
        id="outlined-basic"
        label="Adres URL zdjęcia"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="outlined" size="large" onClick={handleAddImage}>
        Dodaj
      </Button>
    </StyledAddImgPanel>
  );
}
export default AddImagePanel;
