import React , {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home'
import Error from './components/Error';
import Menu from './components/Menu';
import Pathway from './components/Pathway';
import Footer from './components/Footer'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
//Test

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Switch>
              <Route path = "/" Component = {Home}exact />
              <Route path="/form" component={Form}/>
              <Route path="/Pathway" component={Pathway}/>
              <Route component = {Error} />
            </Switch>
            <p> <br /> <br /> <br />Both the Student and Test page does not work.  </p>
          </div>
        </BrowserRouter>

        <Footer />
      </div>
      
    );
  }
}

export default App;
