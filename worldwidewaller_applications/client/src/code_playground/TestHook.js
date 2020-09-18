// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

export default function useIsFiveTimes(counter) {
  const [hookCounter, setHookCounter] = useState(counter);

  useEffect(() => {
    setHookCounter(counter);
  });

  return hookCounter >= 5 ? 'yup' : 'Nope';
}
