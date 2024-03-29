import React, { useState, useEffect } from 'react';

const TaskForm = ({ createTask, updateTask, deleteTask, tasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleCreate = async () => {
    try {
      // Perform validation if needed

      // Call the createTask function passed from the parent component
      await createTask({ title, description });

      // Clear the input fields after creating the task
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      // Perform validation if needed

      // Call the updateTask function passed from the parent component
      await updateTask(taskToEdit._id, { title, description });

      // Reset the taskToEdit state after updating the task
      setTaskToEdit(null);

      // Clear the input fields after updating the task
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      // Call the deleteTask function passed from the parent component
      await deleteTask(taskId);
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const handleEdit = (task) => {
    // Set the taskToEdit state when the edit button is clicked
    setTaskToEdit(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {taskToEdit ? (
          <>
            <button type="button" onClick={handleUpdate}>Update Task</button>
            <button type="button" onClick={() => setTaskToEdit(null)}>Cancel</button>
          </>
        ) : (
          <button type="button" onClick={handleCreate}>Create Task</button>
        )}
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.completed ? 'Completed' : 'Incomplete'}
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskForm;
