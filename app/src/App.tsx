import React,{Fragment} from 'react';
import Header from './components/header';
import Page from './page';

function App() {
  return (
    <Fragment>
      <Header title="Santa Application"></Header>
        <div className="container">
          <Page></Page>         
        </div>
    </Fragment>    
  );
}

export default App;
