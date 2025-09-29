// import React from 'react'
// import { useDispatch } from 'react-redux';
// import {useRef} from 'react';
// import { Link } from 'react-router-dom'
// import '../styles/Main.css'
// import { setUserId } from '../redux/result_reducer';
// export default function Main()
// {
//     const inputRef = useRef(null)
//     const dispatch=useDispatch()

//     function startQuiz(){
//         if(inputRef.current?.value){
//             dispatch(setUserId(inputRef.current?.value))
//         }
//     }

//     return (
//         <div className='container'>
//         <h1 className='title text-light'>Quiz Application</h1>

//         <ol>
//             <li>You will be asked 10 questions one after another.</li>
//             <li>10 points is awarded for the correct answer.</li>
//             <li>Each question has three options. You can choose only one options.</li>
//             <li>You can review and change answers before the quiz finish.</li>
//             <li>The result will be declared at the end of the quiz.</li>
//         </ol>

//         <form id="form">
//             <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
//         </form>

//         <div className='start'>
//             <Link className='btn' to={'/quiz'} onClick={startQuiz}>Start Quiz</Link>
//         </div>

//     </div>
//     )
// }

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    const [category, setCategory] = useState("")
    console.log(category);
    

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            <div className="categories">
                <select  name="category" onChange={(e)=>setCategory(e.target.value)} required>
                    <option value="">Please select a quiz topic</option>
                    <option value="sports">Sports</option>
                    <option value="history">History</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
        </form>

        <div className='start'>
            <Link className='btn' to={`/quiz/${category}`} onClick={startQuiz}>Start Quiz</Link>
        </div>
       

    </div>
  )
}