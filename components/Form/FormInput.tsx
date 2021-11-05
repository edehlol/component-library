import React from 'react';

interface Props {
  type: 'email' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: Props) => {
  const { type, value, onChange } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className="bg-gray-50 border rounded h-10 px-2"
    />
  );
};

FormInput.defaultProps = {
  type: 'text',
};

export { FormInput };
