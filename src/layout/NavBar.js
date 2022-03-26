// import * as React from 'react';
// import styles from "../style/styles.css"
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import { makeStyles } from '@mui/styles';
// import { createTheme } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
// import globe from "../images/globe.jpg"
// import Toolbar from '@mui/material/Toolbar';
// import {Typography, Button, Container, Grid,Paper, Card} from '@mui/material';
// import logo from "../images/logo.png"

// const theme = createTheme();



// const Root = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(0.5)
// }));

// const CustomCard = styled(Card)(({ theme }) => ({
//   paddingTop: theme.spacing(5),
//   paddingBottom: theme.spacing(5),
//   paddingLeft: theme.spacing(10),
//   paddingRight: theme.spacing(10),
  
// }));


// // const mystyle = {
// //   color: "white",
// //   backgroundColor: "DodgerBlue",
// //   padding: "10px",
// //   fontFamily: "Arial"
// // };

// export default function NavBar() {
  

//   return (
//     <div  style={{ backgroundImage: `url(${globe})`, backgroundSize: "cover",  height: "100vh" , width: "100wh", opacity: 1.5, backgroundPosition: "center"}}>
   
//       <AppBar position="sticky" elevation={0} color="transparent">
//         <Toolbar  elevation={0}>
         
//           <img  class="logo" src={logo}/>
//           <Root sx={{ml: 50}}>
//           <Button sx={{mr: 5, ml: 5, border: "1px solid white", borderRadius: 5, py:0.75, px: 3, color: "white"}}><Typography variant="subtitle2">HOME</Typography>  </Button>
//           <Button sx={{mr: 5, ml: 5, border: "1px solid white", borderRadius: 5, py:0.75, px: 3, color: "white"}}><Typography variant="subtitle2">DOCS</Typography> </Button>
//           <Button sx={{mr: 5, ml: 5, border: "1px solid white", borderRadius: 5, py:0.75, px: 3, color: "white"}}><Typography variant="subtitle2">COMMUNITY</Typography> </Button>
//           <Button sx={{mr: 5, ml: 5, border: "1px solid white", borderRadius: 5, py:0.75, px: 3, color: "white"}}><Typography variant="subtitle2">CONTACT</Typography> </Button>

//           {/* <Button color="inherit" sx={{ border: '1px dashed grey' }}>Login</Button>
//           <Button color="inherit" sx={{ border: '1px dashed grey' }}>Login</Button>
//           <Button color="inherit" sx={{ border: '1px dashed grey' }}>Login</Button>
//           <Button color="inherit" sx={{ border: '1px dashed grey' }}>Login</Button> */}
//           </Root>
          
//         </Toolbar>
//       </AppBar>
  
//      <div class="header-group">
//       <Container>
//       <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
//        <Box sx={{color: "white", textAlign: "left"}}>
//        <Typography  variant="h3" sx={{fontWeight: "700"}}  gutterbottom >DECENTRALISED</Typography>
//        <Typography variant="h3"  sx={{fontWeight: "700"}} gutterbottom >AUTONOMOUS</Typography>
//        <Typography variant="h3"  sx={{fontWeight: "700"}} gutterbottom >ORGANISATION</Typography>
//        </Box>
//       </Grid>
//       </Container>

//        <div>
//       <Container >
//       <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
//        <Box sx={{color: "white", textAlign: "left"}}>
//       <Typography variant="body1" gutterbottom >For too long, far many financial opportunities have</Typography>
//       <Typography variant="body1" gutterbottom >been out of the reach of the average investor, reserved</Typography>
//       <Typography variant="body1" gutterbottom >for hedge funds, high networth individuals, instutions</Typography>
//       <Typography variant="body1" gutterbottom >and the likes. We are here to change that</Typography>
//       <Typography variant="body1" gutterbottom >We'd like you to join us</Typography>
      
//       </Box>
//       </Grid>
//       </Container>

//       <Container >
//       <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
//       <Box sx={{color: "white", align: "left", mt: 3}}>
//          <Button sx={{color: "white", border: "1px solid white", mr: 2}}  variant="outlined"><Typography variant="h5">JOIN US</Typography> </Button>
//          <Button sx={{color: "white", border: "1px solid white"}}  variant="outlined"><Typography variant="h5">ABOUT US</Typography>   </Button>
//       </Box>
//       </Grid>
//       </Container>

//       <div class="header-paper">
//       <Container>
//       <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
//        <CustomCard sx={{mr: 4}}>jdj</CustomCard>
//        <CustomCard sx={{mr: 4}}>jdj</CustomCard>
//        <CustomCard sx={{mr: 8}}>jdj</CustomCard>
//       </Grid>
//       </Container>
//       </div>
//       </div>
//       </div> 
//         </div>
//   )
// }
