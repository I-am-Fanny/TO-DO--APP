import './App.css';
import Logo from './components/Logo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='principal-container'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
