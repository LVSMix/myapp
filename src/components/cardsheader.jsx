import React from 'react'
import { Card, Typography, CardContent, CardActions } from '@mui/material'

export default function CardsHeader(props) {

   
  return (
       <Card className="root-cards-header">
            <CardContent>
                {props.icono}
                <Typography className="titulo-cards-header">
                {props.titulo}
                </Typography>

                <Typography className="texto-cards-header">
                {props.texto}
                </Typography>

            </CardContent>
       </Card>
  )
}
