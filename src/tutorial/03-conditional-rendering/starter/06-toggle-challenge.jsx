import { useState } from "react";
const ToggleChallenge = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle_display = () => {
    setIsShowing(!isShowing);
  };

  
  return (
  <div>
      <button className="btn" onClick={toggle_display}>{isShowing ? "Hide" : "Show"}</button>
      {isShowing ? <AlertComponent /> : undefined}
  </div>
  );
};
const AlertComponent = () => {
  return <h2 className="alert alert-danger">Alert</h2>;
};

export default ToggleChallenge;
