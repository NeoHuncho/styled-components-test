import React from 'react'

import styled, { css } from 'styled-components';

import { Wrapper,FadeIn} from './styled/index';



const StyledButton = styled.button`
  background-color:white;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.p};
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
  @media ${({theme})=> theme.mediaQueries.bellow768}{
  font-size:0.4rem;
}
`;

const SuperButton = styled(StyledButton)`
font-size:2.5rem
`;

const OutterWrapper = styled.div`
width:100%;
background-color:blueviolet;
margin-top: 2rem;

&:hover ${StyledButton}{
  color:red;
}

`
const Button = ({ primary, children, margin }) => {
  return (
    <OutterWrapper>
     <Wrapper/*imported from styled */ > 
    <StyledButton primary={primary} margin={margin}>
      {children}
        <p className='someClass'>Test</p>
    </StyledButton>

     </Wrapper>/
     </OutterWrapper>
  )
}
//    <SuperButton primary={primary}>{children} </SuperButton> you can try it ouf by putting in the Button component
export default Button;
