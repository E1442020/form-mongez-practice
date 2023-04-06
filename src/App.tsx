import { Form, FormSubmitOptions } from "@mongez/react-form";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import { ChangeEvent } from "react";
import CheckboxInput from "./components/CheckboxInput";
import RadioInput from "./components/RadioInput";
import MultiSelectInput from "./components/MultiSelectInput";
import SubmitButton from "./components/SubmitButton";
const cities = [
  {
    label: "Cario",
    value: "Cario",
  },
  {
    label: "Alexandria",
    value: "Alexandria",
  },
  {
    label: "KafrElshiekh",
    value: "KafrElshiekh",
  },
];

function App() {
  const submitForm = ({ values, form }: FormSubmitOptions) => {
    console.log(values);
    setTimeout(() => {
      form.submitting(false);
    }, 3000);
  };

  return (
    <>
      <Form onSubmit={submitForm} className="form">
        <h3>Form</h3>
        <EmailInput name="email" required />
        <PasswordInput name="password" required />
        <PhoneNumberInput name="phone" required />
        <div>
          <label htmlFor="remember">Remember Me</label>
          <CheckboxInput name="checkbox" required id="remember" />
        </div>
        <div>
          <label htmlFor="male">Male</label>
          <RadioInput name="gender" value="male" id="male" />
          <br />
          <label htmlFor="female">Female</label>
          <RadioInput name="gender" value="female" id="female" />
        </div>
        <div>
          <p>Select your city</p>
          <MultiSelectInput name="city" required />
        </div>
        <SubmitButton>Login</SubmitButton>
      </Form>
    </>
  );
}

export default App;
