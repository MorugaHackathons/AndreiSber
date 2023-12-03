import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Header from "./components/Header/Header";
import Assistant from "./components/Assistant/Assistant";
import TaskList from './components/TaskList/TaskList';
import Task from "./components/Task/Task";
import {useState} from "react";

function App() {

  let tasks1 = [
    {"name": "Попить воды", "time": "1 минута", "status": "0"},
    {"name": "Победить на Hack&Change", "time": "3 дня", "status": "0"},
    {"name": "Стать финалистом на DataWagon", "time": "3 дня", "status": "0"},
    {"name": "Победить в Phystech Gigachat", "time": "3 дня", "status": "2"},
    {"name": "Поженить фронт и бэк", "time": "∞", "status": "1"},
    {"name": "Task4", "time": "4 hours", "status": "2"},
    {"name": "Task4", "time": "4 hours", "status": "3"},
    {"name": "Task4", "time": "4 hours", "status": "2"},
    {"name": "Task4", "time": "4 hours", "status": "2"},
    {"name": "Task4", "time": "4 hours", "status": "3"},
    {"name": "Task4", "time": "4 hours", "status": "1"},
    {"name": "Task4", "time": "4 hours", "status": "0"},
  {"name": "Task4", "time": "4 hours", "status": "0"},
  {"name": "Task4", "time": "4 hours", "status": "2"},
  {"name": "Task4", "time": "4 hours", "status": "3"},
  {"name": "Task4", "time": "4 hours", "status": "3"},
  ]

  const [tasks, setTasks] = useState(tasks1);
  const [sortedTasks, setSortedTasks] = useState(tasks1);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    setSortedTasks(newTasks);
  };

  return (
    <div className="App">
      <NavigationMenu/>
      <Header tasks={tasks} setSortedTasks={setSortedTasks} />
      <Assistant/>
        <TaskList tasks={tasks1} />
    </div>
  );
}

export default App;
