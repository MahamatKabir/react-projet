import React ,{Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';
import ProjectDetails from './components/projets/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import CreateProject from './components/projets/CreateProject';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />

                    <br /><br /><br /><br />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/project/:id' component={ProjectDetails} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signOut' component={SignOut} />
                        <Route path='/createproject' component={CreateProject} />
                    </Switch>   
                </div>
            </BrowserRouter>
        );
    } 

}

export default App;
