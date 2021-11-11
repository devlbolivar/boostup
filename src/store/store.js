import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "../reducers/filterReducer";
import { dataReducer } from "../reducers/dataReducer";
import { loaderReducer } from "../reducers/loaderReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  filter: filterReducer,
  data: dataReducer,
  loading: loaderReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
