import React from 'react'
import { useFormControl, FormControlProps,requiredRule } from "@mongez/react-form";
export default function RadioInput(props: FormControlProps) {
    const { checked, setChecked,error,otherProps,id } = useFormControl(props,{
        isCollectable({checked}){
            return checked
        }
    });

  return (
    <>
    <input
      type="radio"
      id={id}
      checked={checked}
      onChange={e => {
       setChecked(e.target.checked);
      }}
      {...otherProps}
    />
    {error&&<p>{error}</p>}
    </>
  )
}

RadioInput.defaultProps = {
    type: 'radio',
    rules:[requiredRule],
}