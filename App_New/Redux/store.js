import { createStore } from 'redux';
import { reducer } from './reducers';

/**
 * Log Redux
 */
// import { createLogger } from 'redux-logger';

// const middleware = applyMiddleware(createLogger());

/**
 * Create store - set default number of questions
 */
// const store = createStore(reducer, {numberQuestions: 10}, middleware);
const store = createStore(reducer, { numberQuestions: 10 });

module.exports = store;
