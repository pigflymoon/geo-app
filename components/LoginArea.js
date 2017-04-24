import React from 'react';


export default class LoginArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this.refs.username.focus();
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleKeyDown(event) {
        if (event.keyCode == 13) {
            if (this.state.username) {
                this.props.getUsername(this.state.username);

            }

        }
    }


    render() {
        return (
            <div className="login-area grid-row" onKeyDown={this.handleKeyDown}>

                <div className="form grid grid-cell u-3of4">

                    <div className="unnamed"></div>
                    <div className="grid-cell u-1of2">
                        <h3 className="title">What's your nickname?</h3>
                        <input onChange={this.handleChange} className="username" type="text" maxLength="14"
                               ref="username" placeholder="Your nick name"/>
                        <input onChange={this.handleEmail} className="email" type="text" placeholder="Your email address"/>

                    </div>

                </div>
            </div>
        )
    }
}