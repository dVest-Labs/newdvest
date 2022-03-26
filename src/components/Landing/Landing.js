import React from 'react'
import circle from "../../images/circle.png"
import { styled } from '@mui/material/styles';
import {Container, Typography, Box, Button, Stack, Grid, useMediaQuery, useTheme} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';
import "./Landing.css"

export default function Landing() {



  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  

// theme.typography.h3 = {
 
//   [theme.breakpoints.down('md')]: {
//     fontSize: '20rem',
//   },
// };
  console.log(isMatch); 
    // const divImage = styled('div')(({ theme }) => ({
    //        backgroundImage: `url(${globe})`,
    //        backgroundSize: "cover",
    //        height: "100vh",
    //        width: "100vh",
    //        marginTop: theme.spacing(8)
    //   }));

    // backgroundImage: "url(/images/blue.jpg)",
    // backgroundSize: "cover"

    // width: 100%;
    // height: 100%;
    //  display: flex;
   
    // margin-top: 30px;

    const Root = styled(Box)(({ theme }) => ({
     
      [theme.breakpoints.down('md')]: {
       
       marginLeft: "150px"
      },
        }));

      const Main = styled("div")(({ theme }) => ({
     
         [theme.breakpoints.down('md')]: {
            width: "50%",
           height: "100%",
           display: "flex",       
           marginTop: "30px"
          },
            }));

    return (
        <div>
     
            <Main className='landing'>

            
            <Grid  container direction="row" justifyContent="center" alignItems="center" spacing={8}>
            
            <Grid item lg={6} >
              <Root sx={{color: "white"}} className='textBx'>
                <Typography variant="h3">
                  DECENTRALIZED
                </Typography>
                <Typography variant="h3">
                  AUTONOMOUS
                </Typography>
                <Typography variant="h3">
                  ORGANISATION
                </Typography>

                <Box sx={{color: "white", textAlign: "left" , mt: 2}}>
                 <Typography variant="body1" gutterbottom >For too long, far many financial opportunities have</Typography>
                 <Typography variant="body1" gutterbottom >been out of the reach of the average investor, reserved</Typography>
                 <Typography variant="body1" gutterbottom >for hedge funds, high networth individuals, instutions</Typography>
                 <Typography variant="body1" gutterbottom >and the likes. We are here to change that</Typography>
                 <Typography variant="body1" gutterbottom >We'd like you to join us</Typography>              
                 </Box>


                 <Box sx={{color: "white", align: "left", mt: 3}}>
                  <Button sx={{color: "white", border: "1px solid white", mr: 2}}  variant="outlined"><Typography variant="h5">JOIN US</Typography> </Button>
                  <Button sx={{color: "white", border: "1px solid white"}}  variant="outlined"><Typography variant="h5">ABOUT US</Typography>   </Button>
                 </Box>
                
              </Root>
              </Grid>
              {/* <div className='imgBx'>
                <img src={circle} alt="" className='images' />
              </div> */}


              {
                isMatch ? 
                null
                 : 
                 <>
                 <div className='imgBx'>
                <img src={circle} alt="" className='images' />
                </div>
                 </>
              }
              
             

              </Grid>
       
            </Main>
      
        </div>
    )
}
