import React from "react";
import Button from "@material-ui/core/Button";
import { Card, Typography, CardContent } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "../css/Login.css";
import { login } from "../services/UserServices";
import FaceIcon from "@material-ui/icons/Face";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    step: 1,
    data: {
      email: "",
      password: ""
    },
    disabled: false,
    submitted: false,
    loggedIn: false
  };

  onChange = event => {
    const { data } = this.state;
    data[event.target.name] = event.target.value;
    this.setState({ data });
  };

  submit = () => {
    this.form.submit();
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("form data in submit", this.state.data);

    let userInput = {
      email: this.state.data.email,
      password: this.state.data.password
    };

    login(userInput)
      .then(async response => {
        await this.setState({ loggedIn: true });
        console.log("login", response.data);
         var setItem = localStorage.setItem("LoginToken", response.data.token)
        console.log("setItem-->", setItem);
        alert("login ");
      })
      .catch(errorMessages => {
        console.log("login error", errorMessages);
        alert("err");
      });
  };

  renderRedirect = () => {
    console.log("in rediect", this.state.loggedIn);

    if (this.state.loggedIn) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }
  };

  prevStep = () => {
    let { step } = this.state;
    if (step > 1) {
      step--;
    }
    this.setState({ step });
  };

  nextStep = () => {
    this.form.isFormValid(false).then(isValid => {
      if (isValid) {
        let { step } = this.state;
        if (step < 2) {
          step++;
        }
        this.setState({ step });
      }
    });
  };

  validatorListener = result => {
    this.setState({ disabled: !result });
  };

  renderStep = () => {
    const { step, data } = this.state;
    let content = null;
    switch (step) {
      case 1:
        content = (
          <div>
            <div className="subtitle1">
              <Typography variant="h5">Sign In</Typography>
            </div>
            <div className="subtitle2">
              <Typography subtitle1="h6">Use your Fundoo Account</Typography>
            </div>

            <TextValidator
              key={1}
              name="email"
              className="input"
              variant="outlined"
              label="email"
              validators={["required", "isEmail"]}
              errorMessages={["required field", "invalid email"]}
              value={data.email}
              onChange={this.onChange}
              validatorListener={this.validatorListener}
            />

            <div className="btn1">
              <Button
                color="primary"
                href="/register"
                style={{ marginRight: "16px" }}
              >
                Create Account
              </Button>
              <Button
                color="primary"
                onClick={this.nextStep}
                variant="contained"
              >
                Next
              </Button>
            </div>
          </div>
        );
        break;
      case 2:
        content = (
          <div>
            <div className="subtitle1">
              <Typography variant="h5">Welcome</Typography>
            </div>

            <div className="subtitle2">
              <Chip icon={<FaceIcon />} label={data.email} />
            </div>

            <TextValidator
              key={2}
              type="password"
              name="password"
              className="input"
              variant="outlined"
              label="Password"
              validators={["required"]}
              errorMessages={["required field"]}
              value={data.password}
              onChange={this.onChange}
              validatorListener={this.validatorListener}
            />
            <div className="forgot-btn">
              <Button color="primary" type="submit" href="/forgotPassword">
                Forgot Password?
              </Button>
            </div>
            <div className="btn1">
              <Button
                color="primary"
                onClick={this.prevStep}
                style={{ marginRight: "16px" }}
              >
                Previous
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        );
        break;
    }
    return content;
  };

  render() {
    const { step, disabled, submitted } = this.state;
    return this.state.loggedIn ? (
      <Redirect
        to={{
          pathname: "/dashboard"
          // state: { from: props.location }
        }}
      />
    ) : (
      <Card className="formStep">
        <div className="title">
          <Typography variant="h5">
            <span className="f">F</span>
            <span className="u">u</span>
            <span className="n">n</span>
            <span className="d">d</span>
            <span className="o">o</span>
            <span className="oo">o</span>
          </Typography>
        </div>

        <CardContent>
          <ValidatorForm
            ref={r => {
              this.form = r;
            }}
            onSubmit={this.handleSubmit}
            instantValidate
          >
            {this.renderStep()}
            <br />
          </ValidatorForm>
        </CardContent>
      </Card>
    );
  }
}

export default Login;
