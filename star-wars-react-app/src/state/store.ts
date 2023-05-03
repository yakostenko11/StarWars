import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState, rootReducer, rootSaga } from ".";

export default function configureStore(): Store<AppState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
}
