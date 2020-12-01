import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //demonstration purposes

import Button from './components/Button'
const MainWrapper = styled.section`
width: 100%;
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-direction: column;
`
const StyledLink = styled(Link)`//demonstration purposes
`;

const PaginationWrapper = styled.div`
display:flex;
width:100%;
justify-content:${({page})=>{
    if(page=='first') return 'flex-end';
    else if (page== 'middle') return 'space-between';
    else return 'flex-start';
}}`;

const Links= styled.a.attrs(props => ({
    target: '_blank'
}))`
color: violet;
font-size: 1.5rem;`


const App = () => {
    //NEVER PUT STYYLED COMPONENT INSIDE HERE
    return (
        <MainWrapper>
            <Button primary margin='5rem'>My Primary button </Button>
            <Button >My Button</Button>
            <PaginationWrapper page='first'/**page='middle'*//**page='' */>
                <button>Page 1</button>
            </PaginationWrapper>
            <Links href='https://www.google.com' >One link</Links>
            <Links href='https://www.google.com' > Another linl</Links>
        </MainWrapper>
    )
}

export default App
