import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Transactions = {
  id: string;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'minus' | 'add';
};

const searchSlice = createSlice({
  name: 'history',
  initialState: {
    value: '',
  },
  reducers: {
    changeSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.value = action.payload.value;
    },
  },
});

export const { changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
