import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: inputValue }),
    });
    setInputValue('');
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;