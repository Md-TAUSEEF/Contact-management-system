import React from 'react';
import { useAuth } from './Storetoken/auth_token';

const TaskList = () => {
  const { tasks } = useAuth();

  // Check if tasks is null or undefined
  if (!tasks) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
