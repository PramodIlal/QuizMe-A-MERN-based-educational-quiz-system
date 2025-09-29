// import Questions from "../models/questionSchema.js";
// import Results from "../models/resultSchema.js";
// import questions, { answers } from '../database/data.js'


// /** get all questions */
// export async function getQuestions(req,res){
//     try{
//         const q = await Questions.find()
//         res.json(q)
//     }
//     catch(error){
//         res.json({ error })
//     }
// }

// /** insert all questions */
// // export async function insertQuestions(req,res){
// //     try{
// //         Questions.insertMany({questions : [0], answers:[1]}, function(err,data){
// //             res.json({ msg: "Data Saved Successfully...!"})
// //         })
// //     }catch(error){
// //         res.json( { error } )
// //     }
// // }
// export async function insertQuestions(req, res) {
//     try {
//         // Await the result of insertMany
//         const data = await Questions.insertMany([
//             { questions, answers }
//         ]);
//         res.json({ msg: "Data Saved Successfully...!", data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }


// /**Delete all Questions */
// export async function dropQuestions(req,res){
//     try{
//         await Questions.deleteMany();
//         res.json({ msg:"Questions Deleted Successfully...!"});
//     }catch(error){
//         res.json({ error })
//     }
// }

// /**get all result */
// export async function getResult(req,res){
//     try{
//         const r = await Results.find()
//         res.json(r)
//     }
//     catch(error){
//         res.json({ error })
//     }
// }

// /**post all result */
// export async function storeResult(req,res){
//     try{
//         const {username,result,attempts,points,achived} = req.body;
//         if(!username && !result) throw new Error('Data Not Provided...!');

//         Results.create({username,result,attempts,points,achived},function(err,data){
//             res.json({ msg :"Result Saved Successfully...!"})
//         })
//     }catch(error){
//         res.json({ result })
//     }
// }

// /**delete all result */
// export async function dropResult(req,res){
//     try{
//         await Results.deleteMany();
//         res.json({ msg:"Result Deleted Successfully..!"})
//     }
//     catch(error){
//         res.json({ error })
//     }
// }

import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

/** Get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function handleGetQuestions(req, res) {
    const { category } = req.body; // Extract category from the request body

    try {
        // Fetch the entire questions document containing all categories
        const questionData = await Questions.findOne({});

        if (!questionData) {
            return res.status(404).json({ message: "No questions data found" });
        }

        // Filter questions based on the given category
        const filteredQuestions = questionData.questions.filter(q => q.category === category);

        // Get the answers based on the indices of the filtered questions
        const answers = filteredQuestions.map(q => {
            const originalIndex = questionData.questions.indexOf(q); // Find the original index of the question
            return questionData.answers[originalIndex]; // Use the original index to fetch the correct answer
        });

        // Return the questions and the computed answers array
        return res.json({
            questions: filteredQuestions.map(q => ({
                id: q.id,
                question: q.question,
                category: q.category,
                options: q.options
            })),
            answers: answers
        });
    } catch (error) {
        // Handle errors gracefully
        res.status(500).json({ error: error.message });
    }
}






/** Insert all questions */
// export async function insertQuestions(req, res) {
//     try {
//         const data = await Questions.insertMany(
//             questions.map((q, index) => ({ question: q, answer: answers[index] }))
//         );
//         res.json({ msg: "Data Saved Successfully...!", data });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }
export async function insertQuestions(req, res) {
    try {
        const data = await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!", data });
    } catch (error) {
        res.json({ error });
    }
}


/** Delete all questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Get all results */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Store result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

        const data = await Results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result Saved Successfully...!", data });
    } catch (error) {
        res.json({ error: error.message });
    }
}

/** Delete all results */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully..!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
