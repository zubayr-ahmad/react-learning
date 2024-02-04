import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
