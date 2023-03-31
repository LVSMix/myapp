import { IconButton } from "@mui/material";
import { Component } from "react";
import Delete from "@mui/icons-material/Delete";

export class Country extends Component{
  
    delete = name => {
        this.props.onDelete(name);
    }

    componentWillUnmount(){
        console.log("componente desmontado");
    }

    render(){
        return(
            <li>
                <IconButton size="small" onClick={this.edit}> 
                    <Delete onClick={()=> this.delete(this.props.name)}/>
                </IconButton>
                {this.props.name}
            </li>
        );
    }
}

export default Country;