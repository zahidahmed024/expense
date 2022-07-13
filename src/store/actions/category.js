import * as actions from './actionCreators';

export const addCategory = (data) => {
    // try catch finally
    return async dispatch => {
        dispatch({
            type: actions.ADD_CATEGORY,
            payload: data,
        });
    };
};