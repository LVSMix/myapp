import React, {Component, Fragment} from "react";
import { useParams } from "react-router-dom";
import {Card, CardContent, IconButton, TextField } from "@mui/material";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import ScatterPlot from "@mui/icons-material/ScatterPlot";
import Edit from "@mui/icons-material/Edit";


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
  
  state = {
    edit: false,
    name: this.props.name
  }

  edit = e => {
    this.setState({edit:!this.state.edit});
  };

  handleChange = e => {
    let newState = {...this.state};
    newState.name = e.currentTarget.value;
    this.setState(newState);
    this.props.onUpdateDish(this.props.index,newState.name);
  };

  componentDidUpdate(){
    console.log("Componente Actualizado");
  }

  render(){
    return(
      <Card classname="card">
         <CardContent>
            <List component="nav" subheader={
              <ListSubheader component="div">
                {this.state.edit ? (
                <TextField
                  label="Platillo"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  value={this.state.name}
                  onChange={this.handleChange}
                /> 
                ):(
                  this.props.name
                )}
              <IconButton size="small" onClick={this.edit}>
                <Edit/>
              </IconButton>  
              </ListSubheader>
            }>
             {this.props.ingredients.map((ingredient,index) =>(
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