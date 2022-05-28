import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {store} from './app/store';
import Routeur from './components/Routeur';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routeur />
    </div>
    </Provider>
  );
}

export default App;
