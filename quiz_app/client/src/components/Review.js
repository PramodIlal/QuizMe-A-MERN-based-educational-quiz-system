import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper"; 
/** redux actions */
import * as Action from '../redux/question_reducer';
/** fetch question hook to fetch api data and set value to store */
const Review = (category)=>  {
    console.log("type of category in reviewjs",typeof category);
// const useFetchQestion = (category) => {
//     const dispatch = useDispatch();   
//     const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

//     useEffect(() => {
//         setGetData(prev => ({...prev, isLoading : true}));

//         /** async function fetch backend data */
        // (async () => {
            // try {
                // const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                // const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/get-questions`,{
                    // method: 'POST',
                    // headers: {'Content-Type': 'application/json'},
                    // body: JSON.stringify({'category': category})
                // })

                // const data = await response.json();
                // const questions = data.questions
                // const answers = data.answers
                
                // console.log("review questions: ",questions);
                // console.log("review answers: ",answers);
// 
//                 console.log("firsttttt: ",questions);
//                 if(questions.length > 0){
//                     setGetData(prev => ({...prev, isLoading : false}));
//                     setGetData(prev => ({...prev, apiData : questions}));

//                     /** dispatch an action */
//                     dispatch(Action.startExamAction({ question : questions, answers }))

//                 } else{
//                     throw new Error("No Question Avalibale");
//                 }
            // } catch (error) {
                // setGetData(prev => ({...prev, isLoading : false}));
                // setGetData(prev => ({...prev, serverError : error}));
            // }
//         })();
//     }, [dispatch]);










console.log("category inside3 reviewjs: ",category);



const myfunc = async () => {
    try {
        // const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
        const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/get-questions`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})
        })
        console.log(category);
        const data = await response.json();
        const questions = data.questions
        const answers = data.answers
        
        console.log("review questions: ",questions);
        console.log("review answers: ",answers);



    } catch (error) {
        // setGetData(prev => ({...prev, isLoading : false}));
        // setGetData(prev => ({...prev, serverError : error}));
    }
}



    myfunc();

    return (
        
        <div>
            <h1>Data in reviewjs file</h1>
        </div>
    );
}





export default Review;


