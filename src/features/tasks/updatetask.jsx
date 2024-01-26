import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {
    var navigate = useNavigate();
    var [Status, setStatus] = useState(null);
    var createtask = useFormik({
        initialValues:{
            due_date:"",
            status:""
        },
        onSubmit:(values)=>{
            console.log(values);
            axios({
                method:'put',
                url:'http://localhost:3700/tasks',
                data:{ status: Status }
            }).then(()=>{alert('Task Updated Successfully')})
            navigate('/')
        }
    })
  return (
    <div>
        <form id='registerform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={createtask.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Update Task</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="date" name='due_date' class="form-control" placeholder="Enter Due Date" onChange={createtask.handleChange} required/>
                <label className='form-label'>Due date</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <select name="" id="" onChange={(e) => { setStatus(e.target.value) }}>
                    <option value="" selected disabled>choose status</option>
                    <option value="">TODO</option>
                    <option value="">IN_PROGRESS</option>
                    <option value="">DONE</option>
                </select>
                {/* <input type="date" name='status' class="form-control" placeholder="Enter Due Date" onChange={createtask.handleChange} required/> */}
                {/* <label className='form-label'>Status</label> */}
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Update Task</button><br />
        </form>
    </div>
  )
}

export default UpdateTask