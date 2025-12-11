import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sidebarValueSlice from './reducers/sidebarValueSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sidebarValue'],
}

const rootReducer = combineReducers({
  setSideBarValue: sidebarValueSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof persistedReducer>

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export const persistor = persistStore(store)
export default store
