import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="load-cont">
        <div className="loader">
        <div /> 
        <div />
        <div />
        <div />
      </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

.load-cont{
    width: 100%
}
  .loader {
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .loader div {
    height: 30px;
    width: 30px;
    position: absolute;
    animation: move 4s infinite;
  }

  .loader div:nth-child(1) {
    background-color: rgb(220, 20, 37);
    box-shadow: rgb(220, 20, 37) 0px 7px 29px 0px;
    transform: translate(-30px,-30px);
    animation-delay: -1s;
  }

  .loader div:nth-child(2) {
    background-color: rgb(226, 70, 102);
    box-shadow: rgb(226, 70, 102) 0px 7px 29px 0px;
    transform: translate(30px,-30px);
    animation-delay: -2s;
  }

  .loader div:nth-child(3) {
    background-color: #add8e6;
    box-shadow: #add8e6 0px 7px 29px 0px;
    transform: translate(30px,30px);
    animation-delay: -3s;
  }

  .loader div:nth-child(4) {
    background-color: rgb(2, 2, 83);
    box-shadow: rgb(2, 2, 83) 0px 7px 29px 0px;
    transform: translate(-30px,30px);
    animation-delay: -4s;
  }

  @keyframes move {
    0% {
      transform: translate(-30px, -30px);
    }

    25% {
      transform: translate(30px, -30px);
    }

    50% {
      transform: translate(30px, 30px);
    }

    75% {
      transform: translate(-30px, 30px);
    }

    100% {
      transform: translate(-30px, -30px);
    }
  }`;

export default Loader;
