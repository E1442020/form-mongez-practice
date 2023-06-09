import React from "react";
import {
  useFormControl,
  FormControlProps,
  requiredRule,
} from "@mongez/react-form";
export default function PasswordInput(props: FormControlProps) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <>
      <input
        type="password"
        placeholder="Password"
        value={value}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      />
      {error && <span>{error}</span>}
    </>
  );
}

PasswordInput.defaultProps = {
  rules: [requiredRule],
};
