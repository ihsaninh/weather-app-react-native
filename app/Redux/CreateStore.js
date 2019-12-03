import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import { WeatherData } from './Reducers/WeatherData/WeatherDataReducer';

const middleware = [thunk];

if (__DEV__) {
  middleware.push(reduxLogger);
}

const appReducer = combineReducers({
  weatherData: WeatherData,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store };
