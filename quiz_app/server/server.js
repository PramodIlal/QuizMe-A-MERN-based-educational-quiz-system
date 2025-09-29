import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import userRouter from './router/user.js';


/**import connection file */
import connect from './database/conn.js';

const app=express()

/** app middlewares*/
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/**applicaton port */
const port=process.env.PORT || 8000

app.use('/user',userRouter)

/** routes */
app.use('/api',router) /**apis */


app.get('/',(req,res)=>{
    try{
        res.json("Get Request")
    }
    catch(error){
        res.json(error)
    }
})


/**Start server only when we have valid connection*/
connect().then(()=>{
    try{
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    }
    catch(error){
        console.log("Cannot connect to the server");
    }
}).catch(error=>{
    console.log("Invalid Database Connection");
})
