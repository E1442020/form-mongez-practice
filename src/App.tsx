import { Form } from "@mongez/react-form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import { ChangeEvent } from "react";
import CheckboxInput from "./components/CheckboxInput";
import RadioInput from "./components/RadioInput";


function App() {
  
  const submitForm = ({ values }:any) => {
    console.log(values);
  };
  return (
   <Form onSubmit={submitForm} className="form">
    <EmailInput name="email" required />
    <PasswordInput name="password" required/>
    {/* <PhoneNumberInput name="phone"  required/> */}
    <div>
      <label htmlFor="remember">Remember Me</label>
      <CheckboxInput name="checkbox" required id="remember"/>
    </div>
    <div>
      <label htmlFor="male">Male</label>
      <RadioInput name="gender" value='male' required id="male"/><br/>
      <label htmlFor="female">Female</label>
      <RadioInput name="gender" value='female' required id="female"/>
    </div>
    <button>submit</button>
   </Form>
  );
}

export default App;
