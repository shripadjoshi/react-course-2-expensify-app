import {createStore} from 'redux';

//Action generators = functions that returns action object

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECEREMENT',
    decrementBy: decrementBy
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
//1. Reducers are pure functions
//2. Never change sate or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECEREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    };
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());


store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count: 1001}));

store.dispatch(decrementCount({decrementBy: 10}));