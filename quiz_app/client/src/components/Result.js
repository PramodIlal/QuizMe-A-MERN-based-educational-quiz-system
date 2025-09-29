// import React, { useEffect } from 'react'
// import '../styles/Result.css';
// import { Link } from 'react-router-dom';

// import ResultTable from './ResultTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

// /** import actions  */
// import { resetAllAction } from '../redux/question_reducer';
// import { resetResultAction } from '../redux/result_reducer';
// import { usePublishResult } from '../hooks/setResult';


// export default function Result() {

//     const dispatch = useDispatch()
//     const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

//     const totalPoints = queue.length * 10; 
//     const attempts = attempts_Number(result);
//     const earnPoints = earnPoints_Number(result, answers, 10)
//     const flag = flagResult(totalPoints, earnPoints)


//     /** store user result */
//     usePublishResult({ 
//         result, 
//         username : userId,
//         attempts,
//         points: earnPoints,
//         achived : flag ? "Passed" : "Failed" });

//     function onRestart(){
//         dispatch(resetAllAction())
//         dispatch(resetResultAction())
//     }

//   return (
//     <div className='container'>
//         <h1 className='title text-light'>Quiz Application</h1>

//         <div className='result flex-center'>
//             <div className='flex'>
//                 <span>Username</span>
//                 <span className='bold'>{userId || ""}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Quiz Points : </span>
//                 <span className='bold'>{totalPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Questions : </span>
//                 <span className='bold'>{ queue.length || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Attempts : </span>
//                 <span className='bold'>{attempts || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Earn Points : </span>
//                 <span className='bold'>{earnPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Quiz Result</span>
//                 <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
//             </div>
//         </div>

//         <div className="start">
//             <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
//         </div>

//         <div className="container">
//             {/* result table */}
//             <ResultTable></ResultTable>
//         </div>
//     </div>
//   )
// }

// import React, { useEffect } from 'react'
// import '../styles/Result.css';
// import { Link } from 'react-router-dom';

// import ResultTable from './ResultTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

// /** import actions  */
// import { resetAllAction } from '../redux/question_reducer';
// import { resetResultAction } from '../redux/result_reducer';
// import { usePublishResult } from '../hooks/setResult';


// export default function Result() {

//     const dispatch = useDispatch()
//     const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

//     const totalPoints = queue.length * 10; 
//     const attempts = attempts_Number(result);
//     const earnPoints = earnPoints_Number(result, answers, 10)
//     const flag = flagResult(totalPoints, earnPoints)


//     /** store user result */
//     usePublishResult({ 
//         result, 
//         username : userId,
//         attempts,
//         points: earnPoints,
//         achived : flag ? "Passed" : "Failed" });

//     function onRestart(){
//         dispatch(resetAllAction())
//         dispatch(resetResultAction())
//     }

//   return (
//     <div className='container'>
//         <h1 className='title text-light'>Quiz Application</h1>

//         <div className='result flex-center'>
//             <div className='flex'>
//                 <span>Username</span>
//                 <span className='bold'>{userId || ""}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Quiz Points : </span>
//                 <span className='bold'>{totalPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Questions : </span>
//                 <span className='bold'>{ queue.length || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Attempts : </span>
//                 <span className='bold'>{attempts || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Earn Points : </span>
//                 <span className='bold'>{earnPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Quiz Result</span>
//                 <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
//             </div>
//         </div>

//         <div className="start">
//             <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
//         </div>

//         <div className="container">
//             {/* result table */}
//             <ResultTable></ResultTable>
//         </div>
//     </div>
//   )
// }



//Start

// import React from 'react';
// import '../styles/Result.css';
// import { Link } from 'react-router-dom';

// import ResultTable from './ResultTable';
// import { useDispatch, useSelector } from 'react-redux';
// import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

// /** import actions  */
// import { resetAllAction } from '../redux/question_reducer';
// import { resetResultAction } from '../redux/result_reducer';
// import { usePublishResult } from '../hooks/setResult';

// export default function Result() {
//     const dispatch = useDispatch();
    
//     /** Ensure queue and answers have default values to avoid undefined errors */
//     const { questions: { queue = [], answers = [] }, result: { result = [], userId = "" } } = useSelector(state => state);

//     const totalPoints = queue.length * 10; 
//     const attempts = attempts_Number(result); // Ensure this function handles empty arrays
//     const earnPoints = earnPoints_Number(result, answers, 10); // Ensure this function handles empty arrays
//     const flag = flagResult(totalPoints, earnPoints); // Check for edge cases inside this function

//     /** Store user result */
//     usePublishResult({ 
//         result, 
//         username: userId,
//         attempts,
//         points: earnPoints,
//         achived: flag ? "Passed" : "Failed"
//     });

//     function onRestart() {
//         dispatch(resetAllAction());
//         dispatch(resetResultAction());
//     }

//     return (
//         <div className='container'>
//             <h1 className='title text-light'>Quiz Application</h1>

//             <div className='result flex-center'>
//                 <div className='flex'>
//                     <span>Username</span>
//                     <span className='bold'>{userId || ""}</span>
//                 </div>
//                 <div className='flex'>
//                     <span>Total Quiz Points : </span>
//                     <span className='bold'>{totalPoints || 0}</span>
//                 </div>
//                 <div className='flex'>
//                     <span>Total Questions : </span>
//                     <span className='bold'>{queue.length || 0}</span>
//                 </div>
//                 <div className='flex'>
//                     <span>Total Attempts : </span>
//                     <span className='bold'>{attempts || 0}</span>
//                 </div>
//                 <div className='flex'>
//                     <span>Total Earn Points : </span>
//                     <span className='bold'>{earnPoints || 0}</span>
//                 </div>
//                 <div className='flex'>
//                     <span>Quiz Result</span>
//                     <span 
//                         style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} 
//                         className='bold'
//                     >
//                         {flag ? "Passed" : "Failed"}
//                     </span>
//                 </div>
//             </div>

//             <div className="start">
//                 <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
//             </div>

//             <div className="container">
//                 {/* Ensure ResultTable handles undefined or empty data gracefully */}
//                 <ResultTable></ResultTable>
//             </div>
//         </div>
//     );
// }





//Answerpage

import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';

export default function Result() {
    const dispatch = useDispatch();
    
    const { questions: { queue = [], answers = [] }, result: { result = [], userId = "" } } = useSelector(state => state);

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    const flag = flagResult(totalPoints, earnPoints);

    /** Store user result */
    usePublishResult({ 
        result, 
        username: userId,
        attempts,
        points: earnPoints,
        achived: flag ? "Passed" : "Failed"
    });

    function onRestart() {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>{userId || ""}</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>{totalPoints || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>{queue.length || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'>{attempts || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>{earnPoints || 0}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span 
                        style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} 
                        className='bold'
                    >
                        {flag ? "Passed" : "Failed"}
                    </span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            {/* <div className="start">
                <Link className='btn' to={'/review'}>
                    Review Answers
                </Link>
            </div> */}

            <div className="container">
                <ResultTable>zz</ResultTable>
            </div>
        </div>
    );
}
