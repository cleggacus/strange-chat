import { createContext, Dispatch, FC, ReactNode, useReducer } from "react";
import reducer from "./reducer";
import { Action, State } from "./types";

type Props = {
  children: ReactNode
}

const initialState: State = {
  userState: undefined,
  themeState: "Dark"
};

const StoreContext = createContext<{
  state: State,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
});

const StoreProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{state, dispatch}}>
    {children}
  </StoreContext.Provider>
}

export { StoreProvider, StoreContext };
