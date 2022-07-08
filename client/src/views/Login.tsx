import { FC } from "react"
import Div from "../components/core/Div"
import EntryForm from "../components/entry/EntryForm";

const Login: FC = () => {
  return <Div 
    centerItems bgColor="var(--bg-1)" width="100%" height="100%"
  >
    <EntryForm initFormState={"Login"}></EntryForm>
  </Div>
}

export default Login;
