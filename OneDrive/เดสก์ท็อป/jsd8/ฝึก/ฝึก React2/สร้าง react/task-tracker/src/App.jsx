import { useState } from 'react'
// ใน src/App.js
import './index.css'; // ใช้ Tailwind CSS แทน




function App() {
    // กำหนด state ชื่อ tasks
  const [tasks,setTasks] = useState([
    {id:1,text: ''},
    {id:2,text:''},
  ]);

  // ฟังก์ชันสำหรับเพิ่ม Task ใหม่
  const addTask = (newTask) => {
  newTask.preventDefault();
  setTasks([...tasks,newTask]);
  };

  return(
    <div className='container'>
      <header>
        <h1>Task Tracker</h1>
      </header>

    <section className='form-section'>
      <p>Form </p>
    </section>

    <section>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text} </li>
        ))}
      </ul>
    </section>

    </div>
  )

}


export default App


