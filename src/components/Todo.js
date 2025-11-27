import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Icons
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';





export default function Todo() {
  return (
  <Container  style={{background:'orange', color: 'white',padding:'30px'}}>

    <Grid container spacing={2} style={{background:'orange'}} >
  <Grid size={8} >
              {/* Title */}
      <Typography variant='h4' sx={{textAlign:'left',}} >First Mission</Typography>
  </Grid>
  {/* Action Icons */}
  <Grid size={4} sx={{textAlign:'right',}} >
<IconButton  style={{background: 'white',border:'2px solid green',borderRadius:'50%'}}>
  <AddTaskIcon style={{color:'green',}}/>
</IconButton>

<IconButton  style={{background: 'white',border:'2px solid blue',borderRadius:'50%'}}>
  <EditOutlinedIcon style={{color:'blue'}}/>
</IconButton>

<IconButton style={{background: 'white',border:'2px solid red',borderRadius:'50%'}}>
  <DeleteOutlineIcon style={{color:'red',}}/>
</IconButton>
{/* ===== Action Icons ===== */}
</Grid>
</Grid>


  </Container>
  );
}
