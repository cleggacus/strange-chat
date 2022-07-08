import Div from "./components/core/Div";
import Layout from "./components/layout"

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import styles from "./styles/App.module.scss";
import Login from "./views/Login";
import Register from "./views/Register";

const Test = () => {
  return <Div className={styles.cum} centerItems width={"100%"} height={"100%"}>
    
  </Div>
}

const App = () => {
  return <>
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>

        <Route path="/login"  element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
