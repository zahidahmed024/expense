import * as actions from './actionCreators';

export const addExpense = (data) => {
    return async dispatch => {
        dispatch({
            type: actions.ADD_EXPENSE,
            payload: data,
        });
    };
};