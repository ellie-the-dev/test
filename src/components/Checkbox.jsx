import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  return (
    <StyledWrapper>
      <input className="checkbox" type="checkbox" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox {
    appearance: none;
    width: 20px;
    aspect-ratio: 1;
    border-radius: 8px;
    border: 2px solid black;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  .checkbox::before {
    font-family: "Quicksand", sans-serif;
    position: absolute;
    bottom: -4px;
    left: 1px;
    content: "✔";
    font-size: 40px;
    color: blue;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  .checkbox:checked::before {
    animation: zoom 0.5s ease-in-out;
    transform: scale(1);
  }

  @keyframes zoom {
    0% {
      transform: scale(0);
    }

    20% {
      transform: scale(1.5);
    }

    40% {
      transform: scale(0.5);
    }

    50% {
      transform: scale(1);
    }

    70% {
      transform: scale(1.2);
    }

    90% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }`;

export default Checkbox;
