import React, { useState } from 'react';
import Layout from '~/components/Layout';
import useIsFiveTimes from '~/code_playground/TestHook';

export default function CodePlayground() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to my site');

  function buttonClicked() {
    const newCounter = count + 1;
    setCount(newCounter);
    setMessage(`You have been here ${newCounter} times`);
  }

  const clickedFiveTimes = useIsFiveTimes(count);
  console.log('render');

  return (
    <Layout>
      <p>
        {`You clicked ${count} times`}
      </p>
      <button type="button" onClick={() => buttonClicked()}>
        Click me
      </button>
      <div>
        {message}
      </div>
      <div>
        {`Clicked 5 times? ${clickedFiveTimes}`}
      </div>
    </Layout>
  );
}
