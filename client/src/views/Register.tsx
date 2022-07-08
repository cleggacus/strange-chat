import { FC } from "react"
import Div from "../components/core/Div"
import EntryForm from "../components/entry/EntryForm";

const Register: FC = () => {
  return <Div 
    centerItems bgColor="var(--bg-1)" width="100%" height="100%"
  >
    <EntryForm initFormState={"Register"}></EntryForm>
  </Div>
}

export default Register;
