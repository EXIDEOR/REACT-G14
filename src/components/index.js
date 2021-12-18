import React from "react";

function Input({ id, label, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <Input
        id={id}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
}

export default Input;
