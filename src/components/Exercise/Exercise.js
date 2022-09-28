import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {img, Time, age, id, name, description} = props.exercise;

    const {addExerciseToList} = props
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top p-3" 
                alt="..." />
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <p>Description: {description ? description.slice(0,50) + '...' : 'nothing found'}</p>
                    <p>Age: {age}</p>
                    <p>Time: {Time}s</p>
                    <button onClick={() => addExerciseToList(props.exercise)} className='btn btn-warning w-100'>Add to List</button>
                </div>
            </div>
          
        </div>
    );
};

export default Exercise;