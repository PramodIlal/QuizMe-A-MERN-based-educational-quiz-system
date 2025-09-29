// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import React from 'react';
// import axios from 'axios'


// export function attempts_Number(result){
//     return result.filter(r => r !== undefined).length;
// }

// export function earnPoints_Number(result,answers,point){
//     return result.map((element,i) => answers[i] === element).filter(i=>i).map(()=>point).reduce((prev,curr)=>prev+curr,0)
// }

// export function flagResult(totalPoints,earnPoints){
//     return (totalPoints*50/100)<earnPoints; /**earn 50% marks */
// }

// /**Check user auth*/
// export function CheckUserExist({children}){
//     const auth=useSelector(state => state.result.userId)
//     return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
// }

// /**get server data */
// export async function getServerData(url,callback){
//    const data = await (await axios.get(url))?.data;
//    return callback? callback(data):data;
// }

// /**Post server data */
// export async function postServerData(url,result,callback){
//     const data = await (await axios.post(url,result))?.data;
//     return callback? callback(data):data;
// }

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

// export function earnPoints_Number(result, answers, point){
//     return result
//         .map((element, i) => answers[i] === element)
//         .filter(i => i)
//         .map(i => point)
//         .reduce((prev, curr) => prev + curr, 0);
// }
export function earnPoints_Number(result, answers, point) {
    // Ensure result and answers arrays are of equal length
    if (result.length !== answers.length) {
        console.error("Result and Answers arrays have different lengths.");
        return 0;  // Returning 0 points in case of mismatch
    }

    // Corrected logic: only count points for correct answers
    const earnedPoints = result
        .map((userAnswer, index) => userAnswer === answers[index] ? point : 0)  // Assign points only for correct answers
        .reduce((total, currentPoints) => total + currentPoints, 0);  // Sum all points

    return earnedPoints;
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) <= earnPoints; /** earn 60% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}