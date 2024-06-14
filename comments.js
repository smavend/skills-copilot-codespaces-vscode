// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Get comments
app.get('/comments', function(req, res) {
    var comments = fs.readFileSync('./comments.json', 'utf8');
    res.send(comments);
});

// Add comment
app.post('/comments', function(req, res) {
    var comment = req.body.comment;
    var comments = JSON.parse(fs.readFileSync('./comments.json', 'utf8'));
    comments.push(comment);
    fs.writeFileSync('./comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

// Start server
var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});