import express from 'express'
import initRoute from './routes/index';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

initRoute(app);


app.listen(3000)