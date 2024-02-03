import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log("component did mount child");
    let data = await fetch("https://api.github.com/users/Amit12031984");
    let res = await data.json();
    console.log(res);
    this.setState(res);
  }

  componentWillUnmount() {
    console.log("child unmounts");
  }

  render() {
    // console.log("child render");
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h3>Name : {this.state.login}</h3>
        <h3>Place : {this.state.location}</h3>
      </div>
    );
  }
}

export default UserClass;
