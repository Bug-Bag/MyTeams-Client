import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer} from "redux-persist";
import loginReducer from './loginSlice';
import storage from "redux-persist/lib/storage";

// For consist store into localStorage 
const persistConfig = {
  key: "store",
  storage
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer)

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);