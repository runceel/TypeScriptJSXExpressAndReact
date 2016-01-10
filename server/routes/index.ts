import express = require('express');

var router = express.Router();

router.use('/', (req, res, next) => {
    res.render('index', { title: 'Hello TypeScript world!!'});
});

export default router;