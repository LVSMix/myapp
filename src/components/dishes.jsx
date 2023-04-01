import React, { Component } from "react";
import { useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import Dish from "./dish";
import data from "../assets/data/dishes.json";

function withRouter(Component) {
    return props => <Component history={useNavigate()} />;
  }

export class Dishes extends Component{
  state ={
    dishes: data
  }

    
    goBack = e => {
        e.preventDefault();
        this.props.history("/");
    };

    updateDish = (index,updateName) =>{
       this.props.onUpdateDish(index,updateName);
    }

    render(){
        return(
             <div>
                <Grid container spacing={3}>              
                    {this.props.data.dishes.map((dish, index) => (
                      <Grid item xs="6" md="4">
                        <Dish key={index} name={dish.name} ingredients={dish.ingredients} index={index} onUpdateDish={this.updateDish}></Dish>
                      </Grid>
                    ))} 
                </Grid>
            </div>
        )
    }
}

export default withRouter(Dishes);