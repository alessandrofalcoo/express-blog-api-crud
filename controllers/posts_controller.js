const posts = require('../data/posts')

function index(req, res) {
    res.json(posts)
}
function show(req, res) {

    const postSlug = req.params.slug
    const foundPost = posts.find((thisPost => thisPost.slug === postSlug))
    if (foundPost) {
        return res.json(foundPost)
    } else {
        return res.status(404).json({
            error: '404 not found',
            message: 'Post not found'

        })
    }
}

function store(req, res) {
    console.log(req.body);
    const newTitle = posts[posts.length - 1].id + 1;
    const newPost = {
        title: newTitle,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost);
    console.log(posts);

    res.status(201);
    res.json(newPost);

}
function update(req, res) {
    res.send('Update a post with slug of ' + req.params.slug)
}
function modify(req, res) {
    res.send('Modify a post with slug of ' + req.params.slug)
}
function destroy(req, res) {
    const postSlug = req.params.slug
    const index = posts.findIndex((thisPost) => thisPost.slug === postSlug);
    if (index !== -1) {
        posts.splice(index, 1);
        console.log(posts);
        res.status(204).json({
            error: '204 no content',
            message: 'No content'
        })
    }

}

module.exports = { index, show, store, update, modify, destroy }