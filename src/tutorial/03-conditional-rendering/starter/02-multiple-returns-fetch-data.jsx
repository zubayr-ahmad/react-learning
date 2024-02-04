import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/zubayr-ahmad';


const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const prom = await fetch(url)
        const user = await prom.json()
        setUser(user)
        console.log(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchData();

  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }

  return <div>
    <img style={{width:"125px", borderRadius:"25px"}} src={user.avatar_url} alt={user.name} />
    <h2>{user.name}</h2>
    <h4>works at {user.company}</h4>
    <p>{user.bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
