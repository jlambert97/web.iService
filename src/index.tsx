import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ApplicationState } from './Redux/CombineReducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
<Provider store={createStore(ApplicationState, devTools)}>
    <App />
</Provider>

, document.getElementById('root'));
