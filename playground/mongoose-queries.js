const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

var userId = '581ef6143cd60e27b0ae78be';

if (!ObjectID.isValid(userId)) {
  console.log('User Id is not valid.');
}

// var id = '581f3de447da6b1d8c8bbc4b11';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// }, (e) => {
//   console.log(e);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos: ', todo);
// }, (e) => {
//   console.log(e);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo: ', todo);
// }).catch((e) => console.log(e.message));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e.message));
