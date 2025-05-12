import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `Hello, ${name || 'React'}!`;
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type your name"
    />
  );
}
export default TitleUpdater