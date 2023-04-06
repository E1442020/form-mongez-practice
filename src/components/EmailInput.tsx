import React from "react";
import {
  useFormControl,
  FormControlProps,
  requiredRule,
  emailRule,
} from "@mongez/react-form";
export default function EmailInput(props: FormControlProps) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      />
      {error && <span>{error}</span>}
    </>
  );
}

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
