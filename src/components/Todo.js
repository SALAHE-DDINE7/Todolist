import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Icons
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';





export default function Todo() {
  return (
  <Container  style={{background:'orange', color: 'white',}}>

    <Grid container spacing={2} style={{background:'orange'}} >
  <Grid size={8} >
              {/* Title */}
      <Typography variant='h4' sx={{textAlign:'left',}} >My first To Do Item</Typography>
  </Grid>
  {/* Action Icons */}
  <Grid size={4} sx={{textAlign:'right',}} >
<IconButton>
  <AddTaskIcon style={{color:'green',}}/>
</IconButton>

<IconButton>
  <EditIcon style={{color:'blue',}}/>
</IconButton>

<IconButton>
  <DeleteOutlineIcon style={{color:'red',}}/>
</IconButton>
{/* ===== Action Icons ===== */}
</Grid>
</Grid>


  </Container>
  );
}
