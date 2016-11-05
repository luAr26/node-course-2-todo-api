// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }

  // db.collection('Todos').find({_id: new ObjectID('581e183d26bbfda8bee090ee')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  db.collection('Users').find({name: 'Raul'}).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch users.', error);
  });

  db.collection('Users').find({location: 'Bistrita'}).count().then((count) => {
    console.log(`Number of users with location Bistrita: ${count}`);
  }, (error) => {
    console.log('Unable to fetch users.', error);
  });
  // db.close();
});
