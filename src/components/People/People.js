import React from 'react'
import "../People/People.css"
import { Data } from "../data.js"
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Grid } from '@mui/material';

const People = () => {

  const Root = styled(Container)(({ theme }) => ({


      }));

      const PaperBox = styled(Paper)(({ theme }) => ({
        height: 290,
        marginTop: 40,
        padding: 10,
        marginLeft: 30
      }));


  return (
     <div className='peoples'>
      
      <Root>
  
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  
>
      {
        Data.map((data) => (
 
          <PaperBox>
            <img  src={data.profile} className="images"/>
            </PaperBox>
        
        ))
      }
      
      </Grid>
      </Root>
     </div>
  )
}

export default People