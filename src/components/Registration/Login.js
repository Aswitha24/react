import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { findById } from '../../actions/LoginAction';

import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import LoginService from '../../Services/LoginService';

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            show: false,
        }
        this.handlesubmit = this.handlesubmit.bind(this);
    };
    handleSetuser = e => {

        this.setState({ userId: (e.target.value) })
    }
    handleSetpassword = e => {

        this.setState({ password: (e.target.value) })
    }


    handleLoginsubmit = () => {
        var id = this.state.userId;
        var password = this.state.password;
        console.log(id, password);
        if (id !== '' && password !== '') {
        
                LoginService.validate(id, password).then(res => {

                console.log(res.data);
              alert("Login success")
                this.props.history.push("/dashboard")
          
            })

        } else  {
            if (this.state.userId === '') {
                this.setState({ userIdMessage: false })
            }

            if (this.state.password === '') {
                this.setState({ passwordMessage: false })
            }
            alert("Enter valid credentials")
        }

console.log(this.state.userId);
        console.log(this.state.password);

    }

    handlesubmit = () => {

        this.props.history.push('/login');
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value, passwordMessage: true });
        console.log(this.state.password)
    }
    


    handlecheckPassword = (e) => {
        if (e.target.value !== '') {
            if (/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.target.value)) {

                this.setState({ passwordvalid: true, passwordMessage: true });
            } else {
                this.setState({ passwordvalid: false });
            }
        } else {
            this.setState({ passwordMessage: false });
        }
    }


    render() {
        const boolean = this.props.location.state;

        console.log(boolean);
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <h4><center>Login</center></h4>
                            <hr />
                            <form onSubmit={this.handlesubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
                                        onChange={this.handleSetuser}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg "
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.handleSetpassword}
                                        required />
                                </div>
                              
                                <Link> 
                                <button type="button" 
                                className="btn btn-primary btn btn-info"
                                 onClick={this.handleLoginsubmit}> Login</button>
              </Link>

                                <small><center><h6 > New User? <Link to={"/addUser"} className="btn btn-info"> Sign Up </Link> </h6></center></small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// export default Login;
Login.propTypes = {
    findById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { findById, Link })(Login);