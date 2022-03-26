import React from 'react'
import "../Info/Info.css"
import map from "../../images/map.png"
import { styled } from '@mui/material/styles';
import {Container, Typography, Box, Button, Stack, Grid} from '@mui/material';

const Info = () => {

    const Text = styled(Typography)(({ theme }) => ({
        padding: theme.spacing(2),
        color: "#280A66"
      }));

  return (
    <div className='info'>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <div className='box'><Typography variant="h4">We build products that decentralize financial opportunities.</Typography></div>

          <div className='text'>
                <Typography variant="h5">Our mission is possible;</Typography>
                <Typography variant="h4">DECENTRALIZE EVERYTHING</Typography>
          </div> 
        </Grid>

        <Box sx={{mt: 15}}>
           <Container>
            <Grid container spacing={2}>
              <Grid item lg={6} >
                <img src={map} alt="" className="backImage" />
              </Grid>

              <Grid item lg={6} spacing={4} >
                 <Text variant="h5" className="texts">Join Our DAO:  </Text>
                 <Text variant="h5" className="texts">Visit the DAO Dashboard to see DAO holdings and more. </Text>
                 <Text variant="h5" className="texts">Check the dashboard daily for new proposals, submit your own, and vote as necessary. </Text>
                 <Text variant="h5" className="texts">Join the community to help direct the DAO and it's future.</Text>
                 <Text variant="h5" className="texts">Earn revenue from dVest Labs ventures and more!</Text>
              </Grid>
            </Grid>
        </Container>

        <Box sx={{backgroundColor: "#280A66",  width: 1348.5, height: 200, mb: 20}}>

        </Box>
        </Box>
    </div>
  )
}

export default Info