import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ExerciseList from '../ExerciseList/ExerciseList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const addExerciseToList = (exercise) => {
        console.log(exercise);
        const newList = [...list, exercise]
        setList(newList)
        toast('List Added Successfully')
    }


    return (

        <div className='home-container'>

            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        addExerciseToList={addExerciseToList}
                    ></Exercise>)
                }

            </div>
            <div className='exercise-list-container'>
                <ExerciseList list={list}></ExerciseList>
            </div>


            <div className='container'>
                

            </div>
        </div>



    );
};

export default Home;