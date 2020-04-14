import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from '../../src/actions/expenses.js';
import expenses from '../fixtures/expenses';
import database from '../../src/firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {
            description, note, amount, createdAt
        }
    });
    database.ref('expenses').set(expensesData).then(() => {
        done();
    })
});

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1234abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234abc' 
    })
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('1234abc', {note: 'testing note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234abc',
        updates: {
            note: 'testing note'
        }
    })
});

test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
        
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'My testing expense',
        amount: 40000,
        note: 'This is my first expense for testing',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });

  test('should edit the expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = {
        amount: 600000
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
  });


// test('should setup add expense action object with default values', () => {
//     const expense = {
//         description: '', 
//         note: '', 
//         amount: 0, 
//         createdAt: 0
//     };
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expense,
//             id: expect.any(String)
//         }
        
//     });
// });

