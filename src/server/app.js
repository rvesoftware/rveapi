import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import adminRouter from '../routes/adminRouter.js';


const app = express();

// settings
app.set('port', process.env.PORT || 4000)


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.send("Server is ready")
})


// Routes

app.use('/api/v1/admins', adminRouter);


export default app