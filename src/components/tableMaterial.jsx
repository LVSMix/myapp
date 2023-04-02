import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

export default function TableMaterial(props) {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Vídeo</TableCell> 
                    <TableCell>Fecha de Publicación</TableCell> 
                    <TableCell>Número de Visualizaciones</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height="25px"/>{"  "}{elemento.video}</TableCell>
                        <TableCell align="center">{elemento.fecha}</TableCell>
                        <TableCell align="center">{elemento.visualizaciones}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
   </TableContainer>
  )
}
