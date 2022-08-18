 
const app=require('./app')
const dotenv=require('dotenv')
require('./dbConnection')
dotenv.config()

const port=process.env.PORT

 

app.listen(port,()=>{
    console.log(`App running at ${port}`)
})