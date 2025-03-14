const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts'); 


app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port);
});

app.use('/posts', postsRouter);
