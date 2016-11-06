var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

// GET ALL TODOS

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// CREATE NEW TODO
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((result) => {
    res.send(result);
  }, (e) => {
    res.status(400).send('Unable to create the todo');
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

module.exports = {
  app
};
