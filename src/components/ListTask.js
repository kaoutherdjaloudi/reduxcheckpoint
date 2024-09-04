import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';
import Task from './Task';

const ListTask = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('notDone'))}>Not Done</button>
      </div>
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default ListTask;
