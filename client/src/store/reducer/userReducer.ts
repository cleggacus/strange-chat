import { Action, UserState } from "../types";

const userReducer = (state: UserState, action: Action): UserState => {
  switch(action.type) {
    case "removeUser":
      return undefined;
    case "setUser":
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
