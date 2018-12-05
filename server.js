const express = require('express');
const app = express();

app.set('view engine', 'pug');

const projRoute = require('./routes/projects');
const mainRoute = require('./routes');

app.use(mainRoute);
app.use('/projects', projRoute);
app.use('/static', express.static('public'));

app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.err = err;
    if(err.status >= 100 && err.status < 600) {
        res.status(err.status);
    } else {
        err.status = 500;
    }

    res.render('error')
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on', http.address().port);
  });