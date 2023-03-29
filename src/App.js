import React, {Component} from "react";
import Header from "./components/header";
import NewDish from "./components/newDish";
import './styles/App.css';
import { useNavigate} from "react-router-dom";
import { Dishes } from "./components/dishes";
import data from "./assets/data/dishes.json";


function withRouter(Component) {
  return props => <Component history={useNavigate()} />;
}

class App extends Component {
 
  state ={
    dish: "tacos",
    dishes: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history("/platillos");
  };

  render(){
      return (
        <div className="App">
          <Header />
          <NewDish />
          <Dishes data={this.state.dishes}></Dishes>
        </div>
      );
  }
}

export default withRouter(App);
