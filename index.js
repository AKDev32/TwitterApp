import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import tweetRouter from './routes/tweet.js';

const app = express();
console.log(import.meta);
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname, 'views');

app.use(morgan('combined'));

app.use (express.json());
app.use (express.text());
app.use (express.urlencoded());

app.use('/tweets', tweetRouter);  // localhost:3000/tweets - Yes

app.get('/', (req, res) => {
    res.render('index', { name: "Aman Kumar"} );
});

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});  // what to do if someone makes a GET request to /ping


// app.all('*', (req, res) => {
//     return res.status(404).json({
//         message: 'Not found'
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});