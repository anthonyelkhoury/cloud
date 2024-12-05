import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Task Scheduler</h1>
      </header>

      <main>
        <div className='task-form'>
          <input type='text' id='task' placeholder='Enter task...' />
          <select id='priority'>
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input type='date' id='deadline' />
          <button id='add-task'>Add Task</button>
        </div>
        <div class="task-list" id="task-list">

        </div>
      </main>
    </div>
  );
}

export default App;
