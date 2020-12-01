import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components';

import App from './App'
import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';


const root = document.getElementById('root');

ReactDOM.render(
    <ThemeProvider theme={Theme}/*Because we are adding Theme component here every component will git the variables */>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
     root);

