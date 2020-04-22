import Container from '@material-ui/core/Container';
import React from 'react';

import ExpenseTracker from './Components/ExpenseTracker';
import Title from './Components/Title';

const App = () => {

  return (
    <Container>
      <Title title='EXPEN💲E TRACKER' />
      <ExpenseTracker />
    </Container>
  );
}



export default App;
