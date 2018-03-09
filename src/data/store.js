import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';



const middleWare = applyMiddleware(thunkMiddleware);

const rootReducer = combineReducers({

});

let store = null;


if (process.env.NODE_ENV === 'development') { // for dev perposes
  store = createStore(
    rootReducer,
    compose(
      middleWare,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ),
  );
} else {
  store = createStore(
    rootReducer,
    compose(middleWare),
  );
}
const finalStore = store;
export default finalStore;
