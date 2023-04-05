import React from 'react'
import { useFormControl, FormControlProps,requiredRule } from "@mongez/react-form";
export default function EmailInput(props: FormControlProps) {
    const { value, changeValue,error } = useFormControl(props);

  return (
    <>
    <input
      type="email"
      value={value}
      onChange={e => {
        changeValue(e.target.value);
      }}
    />
    {error&&<p>{error}</p>}
    </>
  )
}

EmailInput.defaultProps = {
    rules:[requiredRule]
}