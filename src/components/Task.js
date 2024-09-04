import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/tasksSlice';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    dispatch(editTask({ id, description: newDescription }));
    setEditMode(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />
      {editMode ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <span>{description}</span>
      )}
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
