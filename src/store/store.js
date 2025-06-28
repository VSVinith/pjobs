import { configureStore } from "@reduxjs/toolkit";
import personSlice from './personSlice'

const store = configureStore({
    reducer:{
        personSlice
    }
})

export default store