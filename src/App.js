import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './styles.css'; 
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Management</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
