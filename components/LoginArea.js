import React from 'react';
let username = '';

export default class LoginArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this.refs.username.focus();
    }

    handleChange(event) {
        this.setState({username: event.target.value});
        console.log(this.state.username)

    }

    handleKeyDown(event){
        if (event.keyCode == 13) {
            console.log('state',this.state.isLoggedIn)
        }
    }


    render() {
        return (
            <div className="login-area grid-column" onKeyDown={this.handleKeyDown}>
                <div className="form">
                    <h3 className="title">What's your nickname?</h3>
                    <input onChange={this.handleChange} className="username-input" type="text" maxLength="14"
                           ref="username"/>
                </div>
            </div>
        )
    }
}