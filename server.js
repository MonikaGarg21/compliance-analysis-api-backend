import app from "./app.js";      // to get the express app i created 

const port = process.env.PORT || 3000;
// local host
app.listen (port, ()=>{      
    console.log(`server is running at port ${port}`);
})