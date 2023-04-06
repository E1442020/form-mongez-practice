import React from "react";
import {
  useFormControl,
  FormControlProps,
  requiredRule,
} from "@mongez/react-form";
export default function PhoneNumberInput(props: FormControlProps) {
  const { value, changeValue, error, otherProps } = useFormControl(props);

  return (
    <>
      <input
        type="text"
        placeholder="Phone Number"
        value={value}
        {...otherProps}
        onChange={(e) => {
          let value = e.target.value;
          if (!value.startsWith("+2")) {
            value = "+2" + value;
          }
          changeValue(value);
        }}
      />
      {error && <span>{error}</span>}
    </>
  );
}
export const phoneNumberRule = ({ value }: any) => {
  if (value.length !== 13) {
    return "phoneNumber must be 11 digits";
  }
  const isValid = /^(\+2)(01)(0|1|2|5)\d{8}$/.test(value);
  if (!isValid) {
    return "phoneNumber is invalid";
  }
};

PhoneNumberInput.defaultProps = {
  rules: [requiredRule, phoneNumberRule],
};
