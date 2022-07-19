import Layout from "./components/layout"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import { StoreProvider } from "./store/store";
import Home from "./views/Home";
import useAuth from "./store/useAuth";

const Router = () => {
  const auth = useAuth();

  return <BrowserRouter> 
    <Routes>
      {
        auth && <>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/messages" element={<Home/>} />
            <Route path="/notifications" element={<Home/>} />
            <Route path="/me" element={<Home/>} />
            <Route path="/settings" element={<Home/>} />
          </Route>

          <Route path="/login"  element={<Navigate to="/"/>} />
          <Route path="/register"  element={<Navigate to="/"/>} />
        </>
      }

      {
        !auth && <>
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
