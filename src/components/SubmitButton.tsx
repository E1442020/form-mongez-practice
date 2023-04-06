import { useSubmitButton } from "@mongez/react-form";
import React from "react";

export default function SubmitButton({ children, ...props }: any) {
  const { disabled, isSubmitting } = useSubmitButton();
  return (
    <button {...props} disabled={disabled || isSubmitting}>
      {isSubmitting ? "Loading..." : children}
    </button>
  );
}
