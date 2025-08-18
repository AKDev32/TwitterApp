import express from 'express';
import morgan from 'morgan';

const app = express();
console.log(import.meta);
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname, 'views');

app.use(morgan('combined'));

app.use (express.json());
app.use (express.text());
app.use (express.urlencoded());

app.get('/', (req, res) => {
    res.render('home', { name: "Aman Kumar"} );
});

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});  // what to do if someone makes a GET request to /ping

// app.post('/hello/*', (req, res) => {
//     console.log('query params', req.query); // query params
//     console.log('req body', req.body);  // req body
//     return res.json({
//         message: "world"
//     });
// });

// app.all('*', (req, res) => {
//     return res.status(404).json({
//         message: 'Not found'
//     });
// });

app.listen(3200, () => {
    console.log(`Server is running on port 3200`);
});