import React, { Component } from "react";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "../css/ForgotPassword.css";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <Card className="formStep">
          <div>
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
            <div className="subtitle1">
              <Typography variant="h5">Reset Password</Typography>
            </div>
            <div className="subtitle1">
              <Typography subtitle="h4">Enter your new Password</Typography>
            </div>
          </div>

          <CardContent >
            <ValidatorForm>
              <div className="inputText5">
                <TextValidator
                  variant="outlined"
                  label="Enter your Password"
                  className="input"
                />
              </div>
            </ValidatorForm>
          </CardContent>
          <div className="btn1">
            <Button type="submit" href="/forgotPassword" color="primary">
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default ResetPassword;