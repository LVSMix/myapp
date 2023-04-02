import React from 'react'
import {Card, Typography, CardContent, CardActions} from '@mui/material';

export default function Cards(props) {
  return (
    <Card className="root-cards">
    <CardContent>
        <Typography  className="titulo-cards">
        {props.titulo}
        </Typography>

        <Typography  className="texto-cards">
        {props.texto}
        </Typography>
    </CardContent>
</Card>
  )
}
