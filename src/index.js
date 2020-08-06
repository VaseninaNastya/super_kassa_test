import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootRedusers from './reducers'
import {changeStateAction} from './actions'
import database from './services/firebase'



const store = new createStore(rootRedusers);

        database.ref('/button/').once('value').then(res => {
        let ch = res.val().chosen;
            if (ch) {
              store.dispatch(changeStateAction())
            }
        }
        )



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>, document.getElementById('root')
);


serviceWorker.unregister();
