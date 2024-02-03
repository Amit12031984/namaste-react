import React, { useState } from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  async componentDidMount() {
    // console.log("component did mount parent");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        This is about us page
        <UserClass name={"Amit Bhadula"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
