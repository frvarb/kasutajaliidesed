import React from 'react';
import './common/index.scss';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartReducer from './components/reducers/cartReducer';
import * as serviceWorker from './serviceWorker';
import App from './pages/App'

const store = createStore(cartReducer);

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
