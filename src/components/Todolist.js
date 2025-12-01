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


const todos = [
  {
    id: v4(),
    title: "Complete Python",
    details : "take the python certif from udemy",
    isCompleted:false,
  },
  {
    id: v4(),
    title: "Complete TypeScript",
    details : "take the Typscipt certif from udemy",
    isCompleted:false,
  },
  {
    id: v4(),
    title: "Complete docker",
    details : "take the docker certif from youtube",
    isCompleted:false,
  },
]




export default function Todolist() {
  // States
  const [todo,setTodos]=useState(todos);
  const [inputValue, setInputValue]=useState("");
  // Affichage des todos
  const todoaffiche = todo.map((e)=>{
    return <Todo key={e.id} title={e.title} details={e.details} />;
  })

  // Functions
function handleAddTodo(){
  const newTodo = {
    id:v4(),
    title : inputValue,
    details : "",
    isCompleted : false,
  }
  setTodos([...todo, newTodo]);
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
