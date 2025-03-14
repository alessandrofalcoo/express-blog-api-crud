const post = require('../data/posts')

function index(req, res) {
    res.send('Posts list')
}
function show(req, res) {
    res.send('Show a single post with slug of ' + req.params.slug)
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