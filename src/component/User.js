import React from "react";
import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const { name, location } = props;
  return (
    <div className="user-card">
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <h3>Name : {name}</h3>
      <h3>Place : {location}</h3>
    </div>
  );
};

export default User;
