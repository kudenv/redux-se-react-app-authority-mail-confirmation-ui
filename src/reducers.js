import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./app/apis/auth-api";
import userReducer from "./app/apis/user-api";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer
});

export default rootReducer;