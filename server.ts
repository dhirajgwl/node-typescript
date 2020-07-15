import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router'

const app:express.Express = express();
app.use(morgan('tiny'));
app.use(bodyParser());

app.use(express.static('public'));


app.use(router);

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' );
});