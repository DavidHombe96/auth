import express from "express"


const app = express()

app.get('/', (req, res) => { 
    res.json({
        error:false,
        message:"Hello World"
    })
})
 
app.listen(5000, () => {
    console.log("Server is running!")
})