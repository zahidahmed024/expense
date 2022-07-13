import { combineReducers } from 'redux';
import categoryReducer from './category';
import expenseReducer from './expense';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'category',
    storage: AsyncStorage,
}

const appReducer = combineReducers({
    category: persistReducer(persistConfig, categoryReducer),
    expense: expenseReducer,
})


export default appReducer;