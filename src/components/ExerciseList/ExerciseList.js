import React, {  useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import img from'../../images/img.jpg'
import './ExerciseList.css'
const ExerciseList = (props) => {
    const {list} = props;
    console.log(list);
    let totalTime = 0;
    for(const exercise of list){
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

            <img className='img' src= {img} alt="" />
            <p className='list-name'>Name: Mujahidul Amin</p>
            <h4>Add A Break</h4>
            <button onClick={() => breakTime(10)}>10s</button>
            <button onClick={() => breakTime(20)}>20s</button>
            <button onClick={() => breakTime(30)}>30s</button>
            <button onClick={() => breakTime(40)}>40s</button>
            <button onClick={() => breakTime(50)}>50s</button>


            <h4>Exercise Details</h4>
            <p>Exercise Time: {totalTime}</p>
            <p>Break Time: {storedList} Seconds</p>
        </div>
    );
};

export default ExerciseList;