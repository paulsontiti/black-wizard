import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
export const store = configureStore({
  reducer: {   
    carts: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, carts: cartsState}
export type AppDispatch = typeof store.dispatch