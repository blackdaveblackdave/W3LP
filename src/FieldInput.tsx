'use client'
// In a Next.js component, under TypeScript’s watchful eye
import React, { useState } from 'react';

const FieldInput: React.FC = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={() => alert(`You typed: ${text}`)}>Submit</button>
    </div>
  );
};

export default FieldInput;