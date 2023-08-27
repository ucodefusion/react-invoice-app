import React from 'react';
import './tailwind.css';
import './App.css';
import { Provider } from 'react-redux';
//import { store } from './redux/store'; // Make sure this path points to your Redux store
import Invoice from './Invoice';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <Invoice />
      </div>
    </Provider>
  );
}

export default App;
