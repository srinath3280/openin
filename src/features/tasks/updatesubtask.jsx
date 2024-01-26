import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateSubTask() {
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
            }).then(()=>{alert('SubTask Updated Successfully')})
            navigate('/')
        }
    })
  return (
    <div>
        <form id='registerform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={createtask.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Update Sub Task</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='prority' class="form-control" placeholder="Enter prority" onChange={createtask.handleChange} required/>
                <label className='form-label'>Prority Changed</label>
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Update SubTask</button><br />
        </form>
    </div>
  )
}

export default UpdateSubTask