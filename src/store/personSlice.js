import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  crudOption : ''
};

// const personSlice = createSlice({
//   name: "persons",
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//   },
// });

const personSlice = createSlice({
    name: "persons",
    initialState,
    reducers:{
        add(state, action) {
            state.data = action.payload
        },
        crud(state, action) {
            state.crudOption = action.payload
        }
    },
    // extraReducers:(builder)=>{
    //     builder
    //     .addCase(getData.fulfilled, (state, action) => {
    //         state.data = action.payload
    //     })
    // }
  });

export const { add, crud } = personSlice.actions;

export default personSlice.reducer;

// export const getData = createAsyncThunk("persons", async () => {
//     const api = `https://retoolapi.dev/F0cOEZ/data?iso=${initialState.search}`;
// //   const api = `https://retoolapi.dev/c2OJqr/data`;

//   const response = await fetch(api);
//   const data = await response.json();
//   return data
// });
