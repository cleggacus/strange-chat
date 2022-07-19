import { useContext } from "react";
import { StoreContext } from "./store";

const useAuth = () => useContext(StoreContext).state.userState;

export default useAuth;