import React, { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import img from '../../images/img.jpg'
import './ExerciseList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseList = (props) => {
    const { list } = props;
    console.log(list);
    let totalTime = 0;
    for (const exercise of list) {
        totalTime = totalTime + exercise.Time;
    }

    const [breaks, setBreak] = useState(0);
    const breakTime = (breaks) => {
        setBreak(breaks)
        addToDb(breaks)
    }
    const storedList = localStorage.getItem('break-time');

    const notify = () => {
        toast('Your activity successfully completed')
    }

    return (
        <div className='exercise-list-container'>
            <ToastContainer />
            <div className='d-inline-flex mt-3'>
                <img className='img mx-2 mt-2' src={img} alt="" />
                <p className='pt-3'><span className='list-name fw-bolder'>Name:</span> Mujahidul Amin</p>
            </div>
            <p className='ms-5 ps-2 mb-4 '><i className='fa-sharp fa-solid fa-location-dot me-1'></i> Dhaka, Bangladesh</p>
            
            <div className='mx-2 p-2 bg-light rounded-3 mt-3 d-flex'>
                <div className='px-3 border border-white mt-1'>
                    <h6>70<sub>kg</sub> <br />
                        <small>Weight</small></h6>
                </div>
                <div className='px-3 border border-white mt-1 '>
                    <h6>5.11 <br />
                        <small>Height</small></h6>
                </div>
                <div className='px-3 border border-white mt-1 '>
                    <h6>26<sub>years</sub> <br />
                        <small>Age</small></h6>
                </div>

            </div>
            <h6 className='mx-2 my-4 mb-4'>Add A Break</h6>
            <div>
                <div className='mx-2 p-3 bg-light rounded-3 break'>
                    <button className='m-1 py-1 border-0 rounded-5' onClick={() => breakTime(10)}>10s</button>
                    <button className='m-1 py-1 border-0 rounded-5' onClick={() => breakTime(20)}>20s</button>
                    <button className='m-1 py-1 border-0 rounded-5' onClick={() => breakTime(30)}>30s</button>
                    <button className='m-1 py-1 border-0 rounded-5' onClick={() => breakTime(40)}>40s</button>
                    <button className='m-1 py-1 border-0 rounded-5' onClick={() => breakTime(50)}>50s</button>
                </div>
            </div>



            <h5 className='mx-2 mt-5 mb-3'>Exercise Details</h5>
            <p className='mx-2 p-3 bg-light rounded-3 mb-3 '>Exercise Time: <span className='ms-4'>{totalTime} Seconds</span></p>
            <p className='mx-2 p-3 bg-light rounded-3'>Break Time:  <span className='ms-5'>{storedList} Seconds</span></p>
            <button onClick={notify} className='btn btn-warning w-100 mt-4'>Activity Completed</button>
        </div>
    );
};

export default ExerciseList;