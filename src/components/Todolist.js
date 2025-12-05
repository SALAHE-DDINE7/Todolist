import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



// Import Components
import Todo from './Todo';

// Others
import { v4 } from 'uuid';
import { TodosContext } from '../Context/TodosContext';
import { useContext } from 'react';






export default function Todolist() {
  // States
  const [inputValue, setInputValue]=useState("");
  const {todos,setTodos} = useContext(TodosContext)
  
  // Functions



  // Affichage des todos
  const todoaffiche = todos.map((e)=>{
    return <Todo key={e.id} todo={e} />;
  })

  // Add Todo
function handleAddTodo(){
  const newTodo = {
    id:v4(),
    title : inputValue,
    details : "",
    isCompleted : false,
  }
  setTodos([...todos, newTodo]);
  setInputValue("");
}


  // ====== finish functions ====



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
      {todoaffiche}
      {/*====== Finish To Do Item =====*/}

      {/* Input add  */}

    <Grid container spacing={2} sx={{marginTop:"20px"}}>

  <Grid size={8}>
<TextField id="outlined-basic" label="Add Task" variant="outlined" sx={{width:"100%"}} 
value={inputValue}
onChange={(e)=>setInputValue(e.target.value)}
/>
  </Grid>

  <Grid size={4} sx={{textAlign:'right',}} display="flex" justifyContent="space-around" alignItems="center">
      <Button variant="contained" color="success" sx={{width:"90%",height:"90%"}}
      onClick={()=>{
        handleAddTodo();
      }}
      >
        Add
      </Button>
</Grid>
</Grid>
      {/*====== Finish Input add  =====*/}
    </CardContent>
  </Container>
  );
}
