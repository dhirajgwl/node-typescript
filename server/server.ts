import express from 'express';
import morgan from 'morgan';
import router from './router';

const app: express.Express = express();
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'));
app.use(router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + process.env.PORT);
});
