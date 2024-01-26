import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateTask() {
    var navigate = useNavigate();
    var createtask = useFormik({
        initialValues:{
            title:"",
            description:"",
            due_date:""
        },
        onSubmit:(values)=>{
            console.log(values);
            axios({
                method:'post',
                url:'http://localhost:3700/tasks',
                data:values
            }).then(()=>{alert('Task Created Successfully')})
            navigate('/')
        }
    })
  return (
    <div>
        <form id='registerform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={createtask.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Create Task</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='title' class="form-control" placeholder="Enter Title" onChange={createtask.handleChange} required/>
                <label className='form-label'>Title</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='description' class="form-control" placeholder="Enter Description" onChange={createtask.handleChange} required/>
                <label className='form-label'>Description</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input type="date" name='due_date' class="form-control" placeholder="Enter Due Date" onChange={createtask.handleChange} required/>
                <label className='form-label'>Due date</label>
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Create Task</button><br />
        </form>
    </div>
  )
}

export default CreateTask