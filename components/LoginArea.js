import React from 'react';
import {FormErrors} from './FormErrors';

export default class LoginArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',

            password: '',
            formErrors: {email: '', username: '', password: '', form: ''},
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.refs.username.focus();
    // }

    // handleChange(event) {
    //     this.setState({username: event.target.value});
    // }
    //
    // handleEmail(event) {
    //     this.setState({email: event.target.value});
    // }

    handleKeyDown(event) {
        if (event.keyCode == 13) {
            console.log('username:',this.state.username)
            if (!this.state.username || !this.state.password || !this.state.email) {
                let fieldValidationErrors = this.state.formErrors;
                fieldValidationErrors.form = 'is empty.'
                this.setState({
                    formErrors: fieldValidationErrors
                });
            }
            if (this.state.username && this.state.email) {
                this.props.getUsername(this.state.username);

            }


        }
    }

    handleSubmit(event) {
        console.log('username:',this.state.username)
        if (!this.state.username || !this.state.password || !this.state.email) {
            let fieldValidationErrors = this.state.formErrors;
            fieldValidationErrors.info = 'is empty.'
            this.setState({
                formErrors: fieldValidationErrors
            });
        }
        if (this.state.username && this.state.email) {
            this.props.getUsername(this.state.username);

        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'username':
                usernameValid = value.length < 20;
                fieldValidationErrors.username = usernameValid ? '' : 'is too long';
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div className="login-area grid-row" onKeyDown={this.handleKeyDown}>

                <div className="form grid grid-cell u-475">

                    <div className="grid-cell u-1of2 unnamed"><i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div className="grid-cell u-1of2 form-control">
                        <h4 className="title">What's your nickname?</h4>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" required className="email" name="email"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.handleUserInput}/>

                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                            <label htmlFor="username">your nick name</label>
                            <input type="text" required className="username" name="username"
                                   placeholder="Your nick name"
                                   value={this.state.username}
                                   onChange={this.handleUserInput}/>

                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="password" name="password"
                                   placeholder="Password"
                                   value={this.state.password}
                                   onChange={this.handleUserInput}/>
                        </div>


                        <button onClick={this.handleSubmit} className="btn btn-signup"
                                disabled={!this.state.formValid}>Sign up
                        </button>


                    </div>

                </div>
                <div className="error-panel">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>
            </div>
        )
    }
}

LoginArea.propTypes = {
    username: React.PropTypes.string,
    email: React.PropTypes.string
};