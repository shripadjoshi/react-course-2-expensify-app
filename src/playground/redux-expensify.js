


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}));
const expenseTwo =  store.dispatch(addExpense({description: 'Coffee', amount: 3000, createdAt: -1000}));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//console.log(expenseOne);
//console.log(expenseTwo);

// store.dispatch(editExpense(expenseTwo.expense.id, {
//     amount: 6000,
//     description: 'Coffee'
// }));

//store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());

// store.dispatch(setEndDate(4000));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'dfsgsdf',
        description: 'Jan rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: 'Shripad',
//     age: 36
// };

// console.log({
//     ...user,
//     location: 'Pune',
//     age: 27
// })