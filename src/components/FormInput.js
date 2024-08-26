import React from 'react';

const FormInput = ({ label, value, onChange, type = "text", required = false }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
