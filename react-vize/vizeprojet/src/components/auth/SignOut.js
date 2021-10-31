import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';


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
        //console.log(this.state);
        this.props.signUp(this.state);
        
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to='/' />//güvenlik işlemi son parti
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
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        signUp:(yeni)=>dispatch(signUp(yeni))//signup component ayarlama
    }
}
const mapStateToProps = (state) =>{
    return {
        authError : state.auth.authError,
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
