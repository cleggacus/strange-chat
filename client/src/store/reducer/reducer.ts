import { Action, State } from "../types";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

const reducer = ({ userState, themeState }: State, action: Action) => ({
  userState: userReducer(userState, action),
  themeState: themeReducer(themeState, action)
})

export default reducer;
