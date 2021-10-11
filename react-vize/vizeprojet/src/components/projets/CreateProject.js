import React, { Component } from 'react'

class CreateProject extends Component {
    state={
        başlik: "",
        içerik: ""
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
                    <h5 className="grey-text text-darken-3">Yazilim Oluştur</h5>
                    <div className="input-field">
                        <label htmlFor="email">Yazilim Başlik</label>
                        <textarea id="başlik"   className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Yazilim Içerik</label>
                        <textarea id="içerik"   className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red lighten-1 z-depth-0">Kaydat</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;
