
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App" style={{display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#0F0F26',
    height:'100vh',}} >
      <Todolist />
          </div>
  );
}

export default App;
