import React from 'react';
import TodoList from './components/TodoList/TodoList';
import { Provider, rootStore } from './mst/models';
import styled, { ThemeProvider } from 'styled-components'
import { todoListTheme } from './styles/todoListTheme';

const Wrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: start;
padding: 60px;
background: #DCDCDC;
`


function App() {
  return (
    
    <Provider value={rootStore}>
       <ThemeProvider theme={todoListTheme}>
    <Wrapper>
      <TodoList />
      
    </Wrapper>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
