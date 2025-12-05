import logo from './logo.svg';
import './App.css';
import ToggleDetails from './Details';
import ScoreDisplay from './ScoreDisplay';
import { useState } from 'react';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimeCounter';


function App() {
  // const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="App-content">
        <ToggleDetails/>
        <ScoreDisplay score="20"/>
        <TaskList />
        <UserList />
        <TimerCounter/>
      </div>
    </div>
  );
}

export default App;
