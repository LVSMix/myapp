import React, {Component, Fragment} from "react";
import { useParams } from "react-router-dom";
import {Card, CardContent } from "@mui/material";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import ScatterPlot from "@mui/icons-material/ScatterPlot";


export class Flag extends Component {
  render(){
    return(
       <div>
        <h1>Bandera</h1>
       </div> 
    )
  }
}

export class Ingredient extends Component {
  render(){
    return( 
      <Fragment>
        <h4>Ingredientes</h4>      
        <h4>Ingredientes</h4>        
      </Fragment>  
    )
  }
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Dish extends Component {
  ingredients = ["Tortilla","Carne","Cebolla"];

  countIngredients(){
    return this.ingredients.length;
  }



  render(){
    const {name} = this.props.params;
    return(
      <Card classname="card">
         <CardContent>
            <List component="nav" subheader={
              <ListSubheader component="div">{this.props.name}
              </ListSubheader>
            }>
             {this.ingredients.map((ingredient,index) =>(
               <ListItem button key={index}>
                  <ListItemIcon>
                    <ScatterPlot />
                  </ListItemIcon>
                  <ListItemText inset primary={ingredient} />
               </ListItem>
             ))}
            </List>
         </CardContent>
      </Card>
    )
  }
}

export default withParams(Dish);