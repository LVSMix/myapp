import React, { Component } from "react";
import {Button} from "@mui/material";


export class Countries extends Component{
    
    getCountries(){
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <h1>Paises</h1>
                <Button variant="contained" color="secondary" onClick={this.getCountries}>
                    Cargar Lista
                </Button>
            </div>
        )
    }
}

export default Countries;