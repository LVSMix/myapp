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

  updateDish = (index, updatedName) =>{
    let newState = {...this.state};
    newState.dishes.dishes[index].name = updatedName;
    this.setState(newState);
  }

  addDish = (dishName) => {
    let newState = {...this.state};
    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "Mexico",
      ingredients: ["Semillas","Pollo","Arroz"]
    };
    newState.dishes.dishes.push(newDish);
    this.setState(newState);
  }

  render(){
      return (
        <div className="App">
          <Header />
          <NewDish  onAddDish={this.addDish}/>
          <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}></Dishes>
        </div>
      );
  }
}

export default withRouter(App);
