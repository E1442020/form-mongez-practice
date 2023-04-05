import { Form } from "@mongez/react-form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import { ChangeEvent } from "react";


function App() {
  
  const submitForm = ({ values }:any) => {
    console.log(values);
  };
  return (
   <Form onSubmit={submitForm} className="form">
    <EmailInput name="email" required />
    <PasswordInput name="password" required/>
    <PhoneNumberInput name="phone"  required/>
    <button>submit</button>
   </Form>
  );
}

export default App;
