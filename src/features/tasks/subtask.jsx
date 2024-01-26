import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateSubTask() {
    var navigate = useNavigate();
    var createsubtask = useFormik({
        initialValues:{
            task_id:""
        },
        onSubmit:(values)=>{
            // console.log(values);
            axios({
                method:'post',
                url:'http://localhost:3700/subtasks',
                data:values
            }).then(()=>{alert('SubTask Created Successfully')})
            navigate('/')
        }
    })
  return (
    <div>
        <form id='registerform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={createsubtask.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Create Sub Task</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='task_id' class="form-control" placeholder="Enter Task Id" onChange={createsubtask.handleChange} required/>
                <label className='form-label'>Task_id</label>
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Create SubTask</button><br />
        </form>
    </div>
  )
}

export default CreateSubTask