import React from 'react';
import { Provider } from 'react-redux';
// import StarIcon from '@material-ui/icons/Star';
import store from './stores/store';
import Header from './components/header';
import Page from './page';
import { randomNumber } from './utils/utils';

const App: React.FC = () => {
  const colors = ['#ffd0d2', '#fffdd0', '#d0fffd', '#d0d2ff'];
  const firstGradient = randomNumber(10, 90);
  return (
    <div
      style={{
        height: '100vh',
        background: `linear-gradient(141deg,${colors[randomNumber(0, 4)]} ${firstGradient}%, ${
          colors[randomNumber(0, 4)]
        })`,
      }}
    >
      <Provider store={store}>
        <Header title="Santa Application"></Header>
        <div className="container">
          <Page />
        </div>
      </Provider>
    </div>
  );
};

export default App;
