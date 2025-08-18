import express from 'express';
import morgan from 'morgan';

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('combined'));

app.use (express.json());
app.use (express.text());
app.use (express.urlencoded());

app.get('/', (req, res) => {
    res.render('home', {name: 'John Doe' });
})

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});  // what to do if someone makes a GET request to /ping

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Not found'
    });
});