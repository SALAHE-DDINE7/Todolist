
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App" style={{display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: 'lightgray',
    height:'100vh',}} >
      <Todolist />
          </div>
  );
}

export default App;
