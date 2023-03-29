import React, { Component } from "react";
import { useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import Dish from "./dish";

function withRouter(Component) {
    return props => <Component history={useNavigate()} />;
  }

export class Dishes extends Component{
    goBack = e => {
        e.preventDefault();
        this.props.history("/");
    };

    render(){
        return(
             <div>
                <Grid container spacing={3}>              
                    {this.props.data.dishes.map((dish, index) => (
                      <Grid item xs="6" md="4">
                        <Dish key={index} name={dish.name} ingredients={dish.ingredients}></Dish>
                      </Grid>
                    ))} 
                </Grid>
            </div>
        )
    }
}

export default withRouter(Dishes);