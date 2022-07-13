import * as actions from './actionCreators';

export const addCategory = (data) => {
    return async dispatch => {
        dispatch({
            type: actions.ADD_CATEGORY,
            payload: data,
        });
    };
};