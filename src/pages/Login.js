import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            statusLogin: false
        }
    }

    prosesLogin = event => {
        event.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        let url = "http://localhost:2024/login"
        axios.post(url, data)
            .then(response => {
                this.setState({ statusLogin: response.data.logged })

                if (this.state.statusLogin) {
                    let userData = response.data.data
                    let token = response.data.token
                    localStorage.setItem("userData", JSON.stringify(userData))
                    localStorage.setItem("token", token)
                    
                    window.location.href = "/profile"
                } else { alert(response.data.message) }
            })
            .catch(eror => console.log(eror))
    }

    render() {
        return (
            <div className="container">
                <h1>LOGIN</h1>
                <form onSubmit={e=>this.prosesLogin(e)}>
                    Email <br />
                    <input type="email" value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        className="form-control" />
                    Password <br />
                    <input type="password" value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        className="form-control" />
                    <button type="submit" className="btn btn-success">login</button>
                </form>
            </div>
        )
    }
}

export default Login;