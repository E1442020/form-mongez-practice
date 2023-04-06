import React from "react";
import {
  useFormControl,
  FormControlProps,
  requiredRule,
} from "@mongez/react-form";
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
export default function MultiSelectInput({ ...props }: FormControlProps) {
  const { value, changeValue, error, otherProps, id } = useFormControl(props, {
    multiple: true,
  });

  return (
    <>
      <select
        id={id}
        value={value}
        onChange={(e) => {
          changeValue(
            Array.from(e.target.selectedOptions).map((option) => option.value)
          );
        }}
        {...otherProps}
        multiple
      >
        {cities.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      {error && <span>{error}</span>}
    </>
  );
}

MultiSelectInput.defaultProps = {
  type: "select",
  rules: [requiredRule],
  defaultValue: [],
};
