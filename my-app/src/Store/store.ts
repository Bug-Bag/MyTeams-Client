import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import chatReducer from './chatSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ...

const persistConfig = {
    key: "store",
    storage
}; 

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);


export const store = configureStore({
  reducer: {
    login: loginReducer,
    chat: chatReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
