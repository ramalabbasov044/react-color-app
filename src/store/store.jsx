import { configureStore } from '@reduxjs/toolkit'
import setColor from './setColor'

export const store = configureStore({
  reducer: {
    colors: setColor,
  },
})