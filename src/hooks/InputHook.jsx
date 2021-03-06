import { useState } from 'react';

const InputHook = (inputValue) => {
  const [value, setValue] = useState(inputValue);

  return [value, setValue];
};

export default InputHook;
