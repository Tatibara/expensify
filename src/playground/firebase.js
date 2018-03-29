import * as firebase from "firebase"; // we take all named exports and put it into firabase object

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCGM-edp-_eku7oTi2U5ZEshSGFdS9X6yI",
  authDomain: "expensify-b14d1.firebaseapp.com",
  databaseURL: "https://expensify-b14d1.firebaseio.com",
  projectId: "expensify-b14d1",
  storageBucket: "expensify-b14d1.appspot.com",
  messagingSenderId: "951007865326"
};

firebase.initializeApp(config);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Taty",
    isSingle: false,
    age: 32,
    location: {
      city: "Berlin",
      country: "Germany"
    }
  })
  .then(() => {
    console.log("The data is saved!");
  })
  .catch(e => {
    console.log("Error hehe: ", e);
  });

/* database.ref("age").set(33);
database.ref("location/city").set("München"); */
database.ref("attributes").set({
  height: 162,
  weight: 54
}).then(()=>{
  console.log('Added attributes to te db');
})
.catch((e)=>{
console.log('Error by saving the attributes', e)
});

//database.ref("isSingle").remove();
console.log('END!');

database.ref().update({
  isSingle: null,
  age: 33,
  job: "Software Developer",
  'location/city': "Tscherkassy" 
})











// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});






// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

