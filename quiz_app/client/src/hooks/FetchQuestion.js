// import { useState,useEffect } from "react"
// import { useDispatch } from "react-redux";
// import * as Action from '../redux/question_reducer'
// import { getServerData } from "../helper/helper";
 



// export const useFetchQuestion = () => {
//     const dispatch = useDispatch();
//     const [getData, setGetData] = useState({isLoading : false, apiData : [], serverError:null})

//     useEffect (()=>{
//         setGetData(prev => ({...prev, isLoading : true}));

//         (async()=> {
//             try{
//                 const [{questions,answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data) => data)

//                 if(questions.length > 0){
//                     setGetData(prev => ({...prev, isLoading : false}));
//                     setGetData(prev => ({...prev, apiData : questions}));
//                     dispatch(Action.startExamAction({question:questions,answers}))
//                 }else{
//                     throw new Error("No Question Available")
//                 }

//             }catch(error){
//                 setGetData(prev => ({...prev, isLoading : false}));
//                 setGetData(prev => ({...prev ,serverError : error}));
//             }
//         })();
//     }, [dispatch]);

//     return [getData, setGetData];
// }


// export const MoveNextQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.moveNextAction());
//     }catch(error){
//         console.log(error);
//     }
// }

// export const MovePrevQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.movePrevAction());
//     }catch(error){
//         console.log(error);
//     }
// }

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import Review from '../components/Review'; 
/** redux actions */
import * as Action from '../redux/question_reducer';
let arr1;
let arr2;
/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = (category) => {
    console.log("type of category in fetch question",typeof category);
    console.log("category in fetch question: ",category);
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                // const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/get-questions`,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'category': category})
                })

                const data = await response.json();
                const questions = data.questions
                const answers = data.answers

                console.log(questions);
                console.log(answers);

                console.log("firsttttt: ",questions);
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question : questions, answers }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}



