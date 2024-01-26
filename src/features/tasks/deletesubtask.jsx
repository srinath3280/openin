import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteSubTask() {
    // const [details,setDetails] = useState();
    // useEffect(() => {
    //     axios({
    //         url: 'http://localhost:4000/tasks',
    //         method: 'get'
    //     }).then((res) => {
    //         // console.log(res.data)
    //         setDetails([res.data])
    //     })
    // }, [])
    // console.log(details)
    return (
        <div>
            <h1>SubTask</h1>
            {/* <table class="table table-dark table-hover w-75 me-auto ms-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due_date</th>
                        <th>Status</th>
                        <th>Delete Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details && details.map((d)=>{
                            return (
                                <tr>
                                    <td>{d.title}</td>
                                    <td>{d.description}</td>
                                    <td>{d.due_date}</td>
                                    <td>{d.status}</td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default DeleteSubTask