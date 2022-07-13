import { combineReducers } from 'redux';
import categoryReducer from './category';
import expenseReducer from './expense';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const categoryPersistConfig = {
    key: 'category',
    storage: AsyncStorage,
}
const expensePersistConfig = {
    key: 'category',
    storage: AsyncStorage,
}

const appReducer = combineReducers({
    category: persistReducer(categoryPersistConfig, categoryReducer),
    expense: persistReducer(expensePersistConfig, expenseReducer),
})


export default appReducer;