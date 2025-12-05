import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Icons
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


// import Context
import {TodosContext} from '../Context/TodosContext';
import { useContext } from 'react';


export default function Todo({todo}) {
  // context
  const {todos,setTodos} = useContext(TodosContext);
  // Functions
  function handleCheck(){
    const update = todos.map((t)=>{
      if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(update);
  }
  return (
  <Container className="Todocard" style={{background:'#1F3378', color: 'white',padding:'10px',marginTop:'15px',marginBottom:'15px',borderRadius:'10px'}}>

    <Grid container spacing={2}  >
  <Grid size={8} >
              {/* Title */}
      <Typography variant='h4' sx={{textAlign:'left',}} > {todo.title} </Typography>
      <Typography variant='h6' sx={{textAlign:'left',}} > {todo.details} </Typography>
  </Grid>
  {/* Action Icons */}
  <Grid size={4} sx={{textAlign:'right',}} display="flex" justifyContent="space-around" alignItems="center">
{/* ===== Chek  Action Icons ===== */}
<IconButton  className='iconbutton' style={{background:todo.isCompleted ? "green": 'white',
border:'2px solid green',borderRadius:'50%',marginRight:"5px"}}
onClick={()=>{
  handleCheck();
}}
>
  <AddTaskIcon style={{color: todo.isCompleted?'white' :'green',}}/>
</IconButton>
{/* ===== Edit  Action Icons ===== */}
<IconButton  className='iconbutton' style={{background: 'white',border:'2px solid blue',borderRadius:'50%',marginRight:"5px"}}>
  <EditOutlinedIcon style={{color:'blue'}}/>
</IconButton>

<IconButton className='iconbutton' style={{background: 'white',border:'2px solid red',borderRadius:'50%'}}>
  <DeleteOutlineIcon style={{color:'red',}}/>
</IconButton>
{/* ===== Action Icons ===== */}
</Grid>
</Grid>


  </Container>
  );
}
