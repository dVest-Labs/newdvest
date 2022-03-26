import React from 'react'
import "../Projects/Project.css"
import anglea from "../../images/anglea.png"
import angleb from "../../images/angleb.png"
import anglec from "../../images/anglec.png"
import angled from "../../images/angled.png"
import anglee from "../../images/anglee.png"
import angleh from "../../images/angleh.png"
import anglei from "../../images/anglei.png"
import angleg from "../../images/angleg.png"
import { Stack, Grid, Container,Box } from '@mui/material';

const Projects = () => {

  const images = [anglea, angleb, anglec, angled, anglee, angleh, anglei, angleg]


  return (
    <div className='project'>
    <Container>
    <Box  >

    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={8}>
 
      <img src={anglea}  alt="" />
      <img src={angleb} alt="" />
      <img src={anglec} alt="" />
      <img src={angled} alt="" />
      
    </Grid>
    </Box>
    
    
    <Box sx={{mt: 20}}>
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={12}>
    
      <img src={anglee}  alt="" />
      <img src={angleg} alt="" />
      <img src={angleh} alt="" />

    </Grid>
    </Box>


    <Box sx={{mt: 20}}>
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={12}>
      <img src={anglei}  alt="" />
    </Grid>
    </Box>
    </Container>
   </div>
  )
}

export default Projects