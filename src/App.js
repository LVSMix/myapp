import React, {Component} from "react";
import './styles/App.css';
import { useNavigate} from "react-router-dom";
import Dashboard from "./pages/dashboard";



function withRouter(Component) {
  return props => <Component history={useNavigate()} />;
}

class App extends Component {
 


  render(){
      return (
        <div className="App">
          <Dashboard />
        </div>
      );
  }
}

export default withRouter(App);
