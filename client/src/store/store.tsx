import { createContext, Dispatch, FC, ReactNode, useEffect, useReducer } from "react";
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

  useEffect(() => {
    fetch("/api/user/auth")
      .then(data => data.json())
      .then(data => {
        if(data.userData) {
          dispatch({
            type: "setUser",
            payload: {
              username: data.userData.username,
              email: data.userData.email
            }
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return <StoreContext.Provider value={{state, dispatch}}>
    {children}
  </StoreContext.Provider>
}

export { StoreProvider, StoreContext };
