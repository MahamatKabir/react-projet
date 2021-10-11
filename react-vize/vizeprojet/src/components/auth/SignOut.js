import React, { Component } from 'react'

class SignOut extends Component {
    state={
        email: "",
        password: "",
        isim: "",
        soyisim: "",
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.id]:e.target.value})

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }
    render() {
        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit}  className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field" onChange={this.handleChange}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"  />
                    </div>
                    <div className="input-field" onChange={this.handleChange}>
                        <label htmlFor="password">Parole</label>
                        <input type="password" id="password"  />
                    </div>
                    <div className="input-field" onChange={this.handleChange}>
                        <label htmlFor="isim">İsminiz</label>
                        <input type="text" id="isim"  />
                    </div>
                    <div className="input-field" onChange={this.handleChange}>
                        <label htmlFor="Soyisim">soyisim</label>
                        <input type="text" id="soyisim"  />
                    </div>
                    <div className="input-field">
                        <button className="btn teal lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignOut;
