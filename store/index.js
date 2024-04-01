// store/index.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/test_store/testSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({ counter: counterReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer, // Corrected this line
    });
};

// Optionally, if you need to export persistor for direct access or manipulation:
export const persistor = (store) => persistStore(store);
