import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slices/ThemeSlice'

const Store = configureStore({
    reducer: {
      theme:themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default Store