import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducer/entries.reducer";
import modalsReducer from "../reducer/modals.reducer";

const ConfigureStore = () => {
  return createStore(combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
  }));
};

export default ConfigureStore;