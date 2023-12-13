import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import { createStore } from 'redux';
// import reducer from './reducers/note-list-reducer';
import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';
import {store} from "./redux/store.js"


// store.subscribe(() => 
// console.log(store.getState())
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


