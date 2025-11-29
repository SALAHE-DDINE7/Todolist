import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Import Components
import Todo from './Todo';






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
    <ToggleButtonGroup exclusive style={{marginTop:"15px", marginBottom:"25px"}} >
      <ToggleButton value="left">Done</ToggleButton>
      <ToggleButton value="center">All</ToggleButton>
      <ToggleButton value="right">Not yet</ToggleButton>
    </ToggleButtonGroup>
      {/*====== Finish toggle  Button filter =====*/}
      {/* To Do Item */}
      <Todo/>
      {/*====== Finish To Do Item =====*/}
    </CardContent>
  </Container>
  );
}
