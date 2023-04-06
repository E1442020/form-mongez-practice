import React from "react";
import {
  useFormControl,
  FormControlProps,
  requiredRule,
} from "@mongez/react-form";
export default function CheckboxInput(props: FormControlProps) {
  const { checked, setChecked, error, otherProps, id } = useFormControl(props);

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        {...otherProps}
      />
      {error && <span>{error}</span>}
    </>
  );
}

CheckboxInput.defaultProps = {
  type: "checkbox",
  rules: [requiredRule],
  defaultValue: true,
};
