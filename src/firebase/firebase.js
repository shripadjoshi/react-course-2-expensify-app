import * as firebase from 'firebase';

let databaseURL = 'https://expensify-2a219.firebaseio.com';

if (process.env.NODE_ENV === 'test') {
    databaseURL = 'https://expensify-test-db8b2.firebaseio.com';
}

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: databaseURL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};
// const expenses = [{
//     description: 'Coffee',
//     note: 'Coffee expense',
//     amount: 1234
// },
// {
//     description: 'Tea',
//     note: 'Tea expense',
//     amount: 2000
// },
// {
//     description: 'Rent',
//     note: 'Rent expense',
//     amount: 5000
// }];

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Deleted', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added', snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch((err) => {
//         console.log('Error........', err);
//     });

// const onValueChanged = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });


// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes').set(firebaseNotes);
//database.ref('notes/-M4d8hlhIOP3JmqeQMoT').remove();

// const onValueChanged = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// const onValueChanged = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChanged);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(42);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error........', err);
//     })

// database.ref().set({
//     name: 'Shripad Joshi',
//     age: 36,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'JTO',
//         company: 'BSNL'
//     },
//     location: {
//         city: 'Pune',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved.....')
// }).catch((err) => {
//     console.log('Error........', err);
// });

// database.ref().update({
//     stressLevel: 10,
//     'job/company': 'Amazon',
//     'location/city': 'Vikhroli'
// }).then(() => {
//     console.log('Data is updated.....')
// }).catch((err) => {
//     console.log('Error........', err);
// });

// database.ref().set({}).then(() => {
//     console.log('Data is removed.....')
// }).catch((err) => {
//     console.log('Error........', err);
// });

// database.ref('isSingle')
//         .remove()
//         .then(() => {
//             console.log('Data is removed')
//         })
//         .catch((err) => {
//             console.log('Error:', err)
//         });

// database.ref()
//         .remove()
//         .then(() => {
//             console.log('Data is removed')
//         })
//         .catch((err) => {
//             console.log('Error:', err)
//         });

// // database.ref().set('This is my data');

// // database.ref('age').set(38);

// // database.ref('location/city').set('Dombivali');

// database.ref('attributes').set({
//     height: 153,
//     weight: 66
// }).then(() => {
//     console.log('Data is saved.....')
// }).catch((err) => {
//     console.log('Error........', err);
// });