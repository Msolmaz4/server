
import express from 'express';

const app = express(); 

app.get('/', (req,res) => {

    res.send('REST API7'); 

});
app.listen(3300, () => console.log("calisti"))
 