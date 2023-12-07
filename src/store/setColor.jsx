import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colors: [],
    colorDetail: [],
}

export const getCard = createSlice({
    name: 'colors',
    initialState,
    reducers: {
      setColor: (state, action) => {
        state.colors.push(action.payload)
      },
      setColorDetail: (state, action) => {
        state.colorDetail = action.payload
      },
      deleteColor: (state, action) => {
        state.colors = action.payload 
      }
    },
})

export const { setColor , setColorDetail , deleteColor } = getCard.actions

export default getCard.reducer