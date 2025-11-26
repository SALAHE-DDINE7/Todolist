import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Todolist() {
  return (
  <Container maxWidth="sm">
   <CardContent style={{background:'white'}}>
          {/* Title */}
      <Typography variant='h2'  sx={{ color: 'text.secondary'}}>
       My To Do List
      </Typography>
      {/*======= finish title ======= */}
       {/* Divider */}
       <Divider/>
       {/* Toggle Button filter */}
    <ToggleButtonGroup exclusive style={{marginTop:"15px", marginBottom:"15px"}} >
      <ToggleButton value="left">Done</ToggleButton>
      <ToggleButton value="center">All</ToggleButton>
      <ToggleButton value="right">Not yet</ToggleButton>
    </ToggleButtonGroup>
      {/*====== Finish toggle  Button filter =====*/}
      <CardActions>
      <Button size="small">Learn More</Button>
      </CardActions>
    </CardContent>

  </Container>

  );
}
