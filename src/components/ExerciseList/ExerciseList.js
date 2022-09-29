import React, { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import img from '../../images/img.jpg'
import './ExerciseList.css'
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


    return (
        <div className='exercise-list-container'>

            <img className='img' src={img} alt="" />
            <p className='name'><span className='list-name fw-bolder'>Name:</span> Mujahidul Amin</p>
            <span className='ms-5 p-4'>Dhaka, Bangladesh</span>
            <div className='mx-3 p-3 bg-light rounded-3 '>
                <span className=''>70<span>kg</span></span>
            </div>
            <h6 className='mt-2 ms-4'>Add A Break</h6>
            <div>
                <div className='mx-3 p-3 bg-light rounded-3 break'>
                    <button onClick={() => breakTime(10)}>10s</button>
                    <button onClick={() => breakTime(20)}>20s</button>
                    <button onClick={() => breakTime(30)}>30s</button>
                    <button onClick={() => breakTime(40)}>40s</button>
                    <button onClick={() => breakTime(50)}>50s</button>
                </div>
            </div>


            <h4>Exercise Details</h4>
            <p className='mx-3 p-3 bg-light rounded-3'>Exercise Time: {totalTime}</p>
            <p className='mx-3 p-3 bg-light rounded-3'>Break Time: {storedList} Seconds</p>
        </div>
    );
};

export default ExerciseList;