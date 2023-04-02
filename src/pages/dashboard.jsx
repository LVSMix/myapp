import React from 'react'
import {Grid} from "@mui/material"
import Navbar from '../components/navBar'
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import VideocamIcon from '@mui/icons-material/Videocam';
import CardsHeader from '../components/cardsheader';
import Cards from '../components/cards';
import Graphics from '../components/graphics';
import TableMaterial from '../components/tableMaterial';

const data = [
  {
    id:1,
    video:
      "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
    fecha: "6 de sep. 2020",
    visualizaciones: 32,
    imagen: require("../assets/img/split.webp"),
  },
  {
    id:2,
      video:"Cómo Solucionar Error al Crear Applicación de React JS",
      fecha: "5 de sep. 2020",
      visualizaciones: 31,
      imagen: require("../assets/img/error.webp"),
    },
    {
      id:3,
      video:"Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
      fecha: "4 de sep. 2020",
      visualizaciones: 21,
      imagen: require("../assets/img/forever.webp"),
    },
];


export default function Dashboard(props) {
  return (
    <div className="root">
      <Grid container spacing={3} >
          <Grid item xs={12}>
            <Navbar/>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icono={<YouTubeIcon className="iconos"/>} titulo="CANAL" texto="BorjaScript" color="rgba(248,80,50,1)" font="white"/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icono={<PublicIcon className="iconos"/>} titulo="PAÍS" texto="México" color="rgba(248,80,50,1)" font="white"/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icono={<VideocamIcon className="iconos"/>} titulo="CANTIDAD DE VÍDEOS" texto="85" color="rgba(248,80,50,1)" font="white"/>
          </Grid>
                    
          <Grid container spacing={4} className="container-cards" xs={12} sm={12} md={6} lg={6} xl={6}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo="SUSCRIPTORES" texto="692"/>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo="VISUALIZACIONES" texto="111,092"/>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo="TIEMPO VISUALIZACIÓN" texto="2,504 horas"/>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Cards titulo="PORCENTAJE IMPRESIONES" texto="14.2%"/>
              </Grid>

          </Grid>

          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="containerGrafica">
             {/*<Graphics />*/}
          </Grid>


          <Grid item xs={12} className="containerTabla">
          
             <TableMaterial data={data}/>
          </Grid>

      </Grid>
    </div>
  )
}
