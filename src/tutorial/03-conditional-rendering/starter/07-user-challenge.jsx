import { useState} from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const toggle_login = () => {
    setUser(user ? null : {name: "Zubair"});
  };

  return <div>
      <h4>{user ? `Hello there, ${user.name}` : "Please Login"}</h4>
      <button className="btn" onClick={toggle_login}>{user ? "login out" : "login"}</button>
    </div>;
};

export default UserChallenge;
