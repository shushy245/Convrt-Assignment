import { useContext, useState } from 'react';
import { ExampleContext } from '../providers/ExampleProvider';

const useExample = () => {
  const { state, setState, updateState } = useContext(ExampleContext);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    // make API call here
    setLoading(false);
  };

  return { state, setState, updateState, loading, fetchData };
};

export default useExample;
