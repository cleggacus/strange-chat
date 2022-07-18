import { Action, ThemeState } from "../types";

const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch(action.type) {
    case "setTheme":
      return action.payload;
    case "toggleTheme":
      if(state == "Dark")
        return "Light";
      else
        return "Dark";
    default:
      return state;
  }
}

export default themeReducer;

