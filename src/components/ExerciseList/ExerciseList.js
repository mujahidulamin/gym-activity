import React, { useState } from 'react';
import './ExerciseList.css'
const ExerciseList = (props) => {
    console.log(props);
   


    const {list} = props;
    console.log(list);
    let totalTime = 0;
    for(const exercise of list){
        totalTime = totalTime + exercise.Time;
    }

    const [breaks, setBreak] = useState(0);
    const breakTime = (breaks) => {
        const newBreak = breaks;
        setBreak(newBreak)

    }

    return (
        <div className='exercise-list-container'>
            <p>selected: {list.length}</p>
            <h4>Add A Break</h4>
            <button onClick={() => breakTime(10)}>10s</button>
            <button onClick={() => breakTime(20)}>20s</button>
            <button onClick={() => breakTime(30)}>30s</button>
            <button onClick={() => breakTime(40)}>40s</button>
            <button onClick={() => breakTime(50)}>50s</button>


            <h4>Exercise Details</h4>
            <p>Exercise Time: {totalTime}</p>
            <p>Break Time: {breaks}</p>
        </div>
    );
};

export default ExerciseList;