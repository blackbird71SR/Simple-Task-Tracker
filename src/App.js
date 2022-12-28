import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
