import React, {Component} from "react";
import './styles/App.css';
import { useNavigate} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Modal  from "./components/modal";



function withRouter(Component) {
  return props => <Component history={useNavigate()} />;
}

class App extends Component {
  
  constructor(props){
     super(props);
     this.state = {modoVisible: false}
  }

  modalClickHandler = (e) => {
    this.setState({modalVisible : false});
  }
  
  confirm = () =>{
    this.setState({modalVisible : true});
  }

  render(){
      return (
        <div className="App">
          <Dashboard />
          <button onClick={this.confirm}>Click me!!</button>
          <div onClick={this.modalClickHandler}>
            <Modal>
             {this.state.modalVisible && "Hola mundo"}
            </Modal>
          </div>
        </div>
      );
  }
}

export default withRouter(App);
