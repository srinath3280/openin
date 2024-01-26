import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  var navigate = useNavigate();
  function CreateTask(){
    navigate(`/task`)
  }
  function CreateSubTask(){
    navigate(`/subtask`)
  }
  function GetTasks(){
    navigate(`/gettask`)
  }
  function GetSubTasks(){
    navigate(`/getsubtask`)
  }
  function UpdateTask(){
    navigate(`/updatetask`)
  }
  function UpdateSubTask(){
    navigate(`/updatesubtask`)
  }
  function DeleteTask(){
    navigate(`/deletetask`)
  }
  function DeleteSubTask(){
    navigate(`/deletesubtask`)
  }
  
  return (
    <div className="App">
      <h1 class='mb-3'>Openin Task</h1>
      <div class='mb-3'>
        <button class='me-2' id="log-btn" onClick={()=>CreateTask()}>CreateTask</button>
        <button class='me-2' id="log-btn" onClick={()=>CreateSubTask()}>CreateSubTask</button>
        <button class='me-2' id="log-btn" onClick={()=>GetTasks()}>GetTasks</button>
        <button class='me-2' id="log-btn" onClick={()=>GetSubTasks()}>GetSubTasks</button>
        <button class='me-2' id="log-btn" onClick={()=>UpdateTask()}>UpdateTask</button>
        <button class='me-2' id="log-btn" onClick={()=>UpdateSubTask()}>UpdateSubTask</button>
        <button class='me-2' id="log-btn" onClick={()=>DeleteTask()}>DeleteTask</button>
        <button class='me-2' id="log-btn" onClick={()=>DeleteSubTask()}>DeleteSubTask</button>
      </div>
      {/* <nav class="navbar navbar-expand-lg bg-danger mb-5">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <h3 className="app-h1">Customer Help Desk {window.localStorage.getItem("user")?(('|| Hello..! ')+u.fullname):null}</h3>
            <div>
              <button class='me-2' id="log-btn" onClick={()=>logout()}>{window.localStorage.getItem("user")?"Create Task":"Login"}</button>
              {
                !window.localStorage.getItem("user")? <button id="log-btn" onClick={()=>register()}>Register</button>:null
              }
            </div>
          </div>
        </div>
      </nav> */}
      
      <Outlet/>
    </div>
  );
}

export default App;
