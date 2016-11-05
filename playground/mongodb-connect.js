// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Learn Node.js',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo.', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Alin',
  //   age: 29,
  //   location: 'Brad'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to create user.', error);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
