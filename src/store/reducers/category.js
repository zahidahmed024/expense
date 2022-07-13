import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    categories: []
};

const categoryReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.ADD_CATEGORY: {
            draft.categories.push(payload);
            return draft;
        }

        default: {
            return draft;
        }
    }
});

export default categoryReducer;
