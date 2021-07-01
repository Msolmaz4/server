
import express from 'express';
import bodyParser from 'body-parser';

const app = express(); 

app.use(bodyParser.urlencuded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {

      const sonuc = {
       durum = true,
      mesaj = "tamamlandi"
        }; 

    res.send('sonuc'); 
});

app.post('/',(req,rest) => {

 res.send({durum : true});
});

app.listen(3300, () => console.log("calisti"))
 