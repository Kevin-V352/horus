/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useDebounced = (input: string = '', time: number = 1000): string => {

  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {

    const timeout = setTimeout(() => {

      setDebouncedValue(input);

    }, time);

    return () => {

      clearTimeout(timeout);

    };

  }, [input]);

  return debouncedValue;

};

export default useDebounced;
