import React from 'react'

import styled, { css } from 'styled-components';

import { Wrapper,FadeIn} from './styled/index';

const OutterWrapper = styled.div`
width:100%;

`

const StyledButton = styled.button`
  background-color:white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: ${({ margin }) => margin || '2rem'};
  padding: .5rem 1rem;
  border: 1px solid palevioletred;
  border-radius : 3px;
  animation:2s ${FadeIn} ease-in;

  ${({ primary }) => primary && css`
    background-color:palevioletred;
    color:white;
    box-shadow:0 .5rem 1.5rem rgba(0,0,0,0.2)
    `}

  &:hover{
    color:white;
    background-color:green;
  }
  .someClass{
    color:blue;
    font-size:10px;
  }
`;

const SuperButton = styled(StyledButton)`
font-size:2.5rem
`;

const Button = ({ primary, children, margin }) => {
  return (
     <Wrapper > 
    <StyledButton primary={primary} margin={margin}>
      {children}
        <p className='someClass'>Test</p>
    </StyledButton>

     </Wrapper>/*imported from styled folder*/ 
  )
}
//    <SuperButton primary={primary}>{children} </SuperButton> you can try it ouf by putting in the Button component
export default Button;
