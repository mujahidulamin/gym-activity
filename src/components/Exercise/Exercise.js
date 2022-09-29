import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {img, Time, age, id, name, description} = props.exercise;

    const {addExerciseToList} = props

    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top p-3" 
                alt="..." />
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <p><span className='fw-bold'>Description:</span> {description ? description.slice(0,70) + '...' : 'nothing found'}</p>
                    <p><span className='fw-bolder'>Age:</span> {age}</p>
                    <p><span className='fw-bolder'>Time:</span> {Time}s</p>
                    <button onClick={() => addExerciseToList(props.exercise)} className='btn btn-warning w-100'>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;