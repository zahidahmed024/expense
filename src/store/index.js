import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import appReducer from './reducers'

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(appReducer, applyMiddleware(reduxThunk))
export const persistor = persistStore(store)

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// export default store;
