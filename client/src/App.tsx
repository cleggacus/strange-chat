import Layout from "./components/layout"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import { StoreContext, StoreProvider } from "./store/store";
import { useContext } from "react";

const Router = () => {
  const { state, dispatch } = useContext(StoreContext);

  return <BrowserRouter> 
    <Routes>
      {
        state.userState && <>
          <Route path="/" element={<Layout/>} />
          <Route path="/login"  element={<Navigate to="/"/>} />
          <Route path="/register"  element={<Navigate to="/"/>} />
        </>
      }

      {
        !state.userState && <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
        </>
      }
    </Routes>
  </BrowserRouter>
}

const App = () => {
  return <StoreProvider>
    <Router/>
  </StoreProvider>
}

export default App;
