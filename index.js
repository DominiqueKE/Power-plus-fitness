const express =require('express');
const app = express();

app.get ("/register "  , (  req  ,  res)=>{
        res.send(  
            {
                  message:   "  first  endpoint  is  working"
            }
        )

});




app.listen(  8000  , ()=>{

      console.log(  "  listening  on  port  8000")



})