import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import image from "../assets/account.svg";
import "../css/Register.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Register extends Component {
    state = {
        formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
        }
    };

    handleChange = event => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };
    handleSubmit = e => {
        console.log(JSON.stringify(this.state));
        e.preventDefault();
    };

    render() {
        const { formData, submitted } = this.state;
        return (
            <div>
                <Card className="form">
                    <div className="header">
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
                        <div className="subtitle">
                            <Typography subtitle1="h6">Create Your Fundoo Account</Typography>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <CardContent className="Content">
                                <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
                                    <div className="inputText3">
                                        <TextValidator
                                            type="text"
                                            value={formData.firstName}
                                            variant="outlined"
                                            label="First name"
                                            name="firstName"
                                            onChange={this.handleChange}
                                            className="firstName"
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                        <TextValidator
                                            type="text"
                                            value={formData.lastName}
                                            variant="outlined"
                                            label="Last name"
                                            name="lastName"
                                            onChange={this.handleChange}
                                            className="lastName"
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </div>
                                    <br />
                                    <div className="inputText1">
                                        <TextValidator
                                            type="email"
                                            value={formData.email}
                                            variant="outlined"
                                            label="Email"
                                            name="email"
                                            onChange={this.handleChange}
                                            className="email"
                                            validators={["required", "isEmail"]}
                                            errorMessages={[
                                                "this field is required",
                                                "email is not valid"
                                            ]}
                                        />
                                        <div className="message">
                                        <span>You can use letters,numbers&periods</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="inputText1">
                                        <div className="inputText">
                                            <TextValidator
                                                type="password"
                                                value={formData.password}
                                                variant="outlined"
                                                label="Password"
                                                name="password"
                                                onChange={this.handleChange}
                                                className="password"
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                            <TextValidator
                                                type="password"
                                                value={this.state.confirm}
                                                variant="outlined"
                                                label="Confirm"
                                                name="confirm"
                                                onChange={this.handleChange}
                                                className="confirm"
                                            />
                                        </div>
                                        <div className="message">
                                        <span>
                                            Use 8 or more characters with a mix of letters, numbers
                                            & symbols
                                        </span>
                                        </div>
                                    </div>
                                </ValidatorForm>
                            </CardContent>
                            <CardActions className="btn">
                                <Button type="submit" color="primary" href="/">Sing In Instead</Button>
                                <Button
                                onClick={this.handleSubmit}
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={submitted}
                                >Next</Button>
                            </CardActions>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="image">
                                <img src={image}></img>
                            </div>
                            <div className="text">
                                <span>One account. All of Google working for you.</span>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

export default Register;