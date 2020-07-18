import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './router'

const app:express.Express = express();
app.use(morgan('tiny'));
app.use(bodyParser());

app.use(express.static('dist'));
app.use(router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + process.env.PORT);
});