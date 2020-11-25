import React, { Component } from "react";
import { connect } from "react-redux";
import service from "../../services/service";
import { loginAction } from "../../store/login/login.action";
import environment from "../../index";
class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  popUp = (msg) => alert(msg);

  validateForm = async (username, password) => {
    if (!username || !password) {
      return Promise.reject("all field must be filled...");
    }
    Promise.resolve("success");
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    try {
      await this.validateForm(username, password);
      const user = await service.get(environment.login);
      if (Array.isArray(user)) {
        const isValid = user.find(
          (val) =>
            val.username === this.state.username &&
            val.password === this.state.password
        );
        console.log(isValid);
        if (isValid) {
          this.props.login({ user: username, success: true });
          //this.props.history.push("/main");
        } else {
          throw new Error("Wrong credentials...");
        }
      } else {
        throw new Error("Something went wrong");
      }
    } catch (e) {
      this.popUp(e.message);
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100 ">
          <div className="col-xs-4 col-sm-6">
            <h2 className="text-default text-center p-3">Encora</h2>
            <form className="myForm" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control input-lg"
                  type="text"
                  name="username"
                  id="text"
                  placeholder="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control input-lg"
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group d-flex ">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-default btn-lg "
                  onClick={this.onSubmit}
                  value={"Login"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login;
};

const mapDispatchToProps = {
  login: loginAction.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
