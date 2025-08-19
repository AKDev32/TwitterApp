import express from 'express';

const router = express.Router();

router.get ('/', (req, res) => {
    return res.json ({
        message: "Welcome to the tweet route"
    });
});

router.get ('/:id', (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route',
        id: req.params.id
    });
});
export default router;

// localhost:3000/tweet GET