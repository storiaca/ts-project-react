import { combineReducers } from "redux";
import repositoriesReduces from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReduces,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
