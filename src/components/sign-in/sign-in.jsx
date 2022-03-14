import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/fireabase.utils";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account.</h2>
        <span>Sign In with email and password</span>
        <form onClick={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons" >
          <CustomButton type="submit" >Sign In</CustomButton>

          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
