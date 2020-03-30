import {addExpense, editExpense, removeExpense} from '../../src/actions/expenses.js';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1234abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234abc' 
    })
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
    const expense = {
        description: 'testing description',
        note: 'testing note',
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
        
    });
});

test('should setup add expense action object with default values', () => {
    const expense = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
        
    });
});

