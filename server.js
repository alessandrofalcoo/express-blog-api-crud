const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts'); 
const serverError = require('./middlewares/server_error')

app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port);
});

app.use(express.json());

app.get('/', (req, res)=>{
    app.daje()
    console.log('These are my posts')
})

app.use(serverError)


app.use('/posts', postsRouter);
