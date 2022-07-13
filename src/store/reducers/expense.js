import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    expenses: []
};

const expenseReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.ADD_EXPENSE: {
            draft.expenses.push(payload);
            return draft;
        }

        default: {
            return draft;
        }
    }
});

export default expenseReducer;
