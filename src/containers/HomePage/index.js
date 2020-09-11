import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10% 0 10%;
  box-sizing: border-box;
`

function App() {
  return (
    <HomePageWrapper>
      <Typography variant="h5">
        Bem vindo
      </Typography>
      <Typography variant="subtitle1">
        Para cadastrar e listar funcionários e cargos basta acessar o menu
      </Typography>
    </HomePageWrapper>
  );
}

export default App;
