import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './appslice'
import { combineReducers } from 'redux';
import userReducer from './appslice';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = configureStore({
  reducer: persistedReducer,
})
let persistor = persistStore(store)

export default { store, persistor }