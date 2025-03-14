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
    res.send('Store a new post')

}
function update(req, res) {
    res.send('Update a post with slug of ' + req.params.slug)
}
function modify(req, res) {
    res.send('Modify a post with slug of ' + req.params.slug)
}
function destroy(req, res) {
    res.send('Delete a post with slug of ' + req.params.slug)
}

module.exports = { index, show, store, update, modify, destroy }