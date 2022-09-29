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

        <div >
            <div >
                <h4 className='container mt-3'>Select today’s exercise</h4>
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
                </div>
            </div>


            <div className='container mt-5 mb-5'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="fw-bold text-black fs-4">
                                    1. How does React Work?</span>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                React uses a concept called the virtual DOM. In JavaScript, a virtual DOM is essentially a DOM tree representation. As a result, it will use the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible. React elements, unlike browser DOM elements, are simple objects that are easy to generate. The DOM is updated to match the React elements by React DOM. This is because JavaScript is extremely fast, and it's worth keeping a DOM tree in it to speed up its manipulation.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span class="fw-bold text-black fs-4">
                                    2. Difference between props and state
                                </span>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>1. Props are read-only; Depending on user State can be change.</p>
                                <p>2. Props are immutable; State is mutable.</p>
                                <p>3. Props allow us to pass data from one component to other components as an argument; State holds information about the components.</p>
                                <p>4. Props make components reusable; State cannot make components reusable.</p>
                                <p>5. Props can be accessed by the child component; State cannot be accessed by child components.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span class="fw-bold text-black fs-4">3. The other works of useEffect except Data Load</span>

                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The useEffect Hook allows you to perform side effects in your components.
                                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                                useEffect accepts two arguments. The second argument is optional.
                                useEffect function, dependency
                                useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
                                This is not what we want. There are several ways to control when side effects run.
                                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
                                the useEffect()is used for causing side effects in functional components and it is also capable for handling componentDidMount, componentDidUpdate and componentWillUnmountlife-cycle methods of class based components into functional component.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Home;