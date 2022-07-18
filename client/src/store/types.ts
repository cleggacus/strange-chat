type User = {
  username: string,
  email: string
};

type Theme = "Light" | "Dark"

// state

type UserState = User | undefined;

type ThemeState = "Light" | "Dark";

type State = {
  userState: UserState,
  themeState: ThemeState
};

// action

type UserAction = {
  type: "setUser",
  payload: User
} | {
  type: "removeUser"
};

type ThemeAction = {
  type: "toggleTheme"
} | {
  type: "setTheme",
  payload: Theme
}

type Action = UserAction | ThemeAction;

export type {
  User, 
  State, UserState, ThemeState,
  Action, UserAction, ThemeAction
};