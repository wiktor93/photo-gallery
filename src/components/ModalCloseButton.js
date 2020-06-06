import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100px;
  width: 100px;
  padding: 10px;
  display: ${({fullScreen}) => (fullScreen ? 'flex' : 'none')};
  justify-content: flex-end;
  background: linear-gradient(45deg, transparent 50%, black 50%);

  svg {
    fill: white;
    cursor: pointer;
  }
`;

function ModalCloseButton({fullScreen, setFullScreen}) {
  return (
    <StyledCloseButton fullScreen={fullScreen}>
      <CloseIcon fontSize="large" onClick={() => setFullScreen(false)} />
    </StyledCloseButton>
  );
}
export default ModalCloseButton;
