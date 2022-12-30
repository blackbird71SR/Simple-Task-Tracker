import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hello-1',
      day: 'Feb 8th at 2:45pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Hello-2',
      day: 'Feb 8th at 2:45pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hello-3',
      day: 'Feb 8th at 2:45pm',
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task,
      ),
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks!'
      )}
    </div>
  );
}

export default App;
