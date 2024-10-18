import express from 'express';
import { config } from 'dotenv'
import { productRouter } from './routes/index.js';

config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())


app.use("/product" , productRouter)

app.use((err , req , res, next) => {
    if(err)
        console.log(err)
       return res.send({message: err.message})

    return res.satus(404).send({massege: "not Foud"})
    
})


app.listen(PORT , () => {
    console.log(`${PORT} - server ishga tushdi`)
})