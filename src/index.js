import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './Todo.js';
import PomodoroApp from './Pomodoro.js';
function App(){
    return (
        <div>
            <TodoApp />
            <PomodoroApp />
        </div>
    );
}
ReactDOM.render(
       <App />,
  document.getElementById('root')
);
