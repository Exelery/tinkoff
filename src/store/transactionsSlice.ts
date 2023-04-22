import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  type: 'expense' | 'income';
};

const data: Transaction[] = [
  {
    id: '1',
    name: 'Groceries',
    amount: 50,
    date: '2022-04-21',
    category: 'Food',
    type: 'expense',
  },
  {
    id: '2',
    name: 'Salary',
    amount: 1000,
    date: '2022-04-20',
    category: 'Income',
    type: 'income',
  },
  {
    id: '3',
    name: 'Gas bill',
    amount: 30,
    date: '2022-04-19',
    category: 'Utilities',
    type: 'expense',
  },
  {
    id: '4',
    name: 'Freelance work',
    amount: 500,
    date: '2022-04-18',
    category: 'Income',
    type: 'income',
  },
  {
    id: '5',
    name: 'Coffee',
    amount: -1000,
    date: '2022-04-17',
    category: 'Food',
    type: 'expense',
  },
];

const value: Transaction[] = data;

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    value,
  },
  reducers: {
    addTransactionshValue(state, action: PayloadAction<{ value: Transaction }>) {
      state.value.push(action.payload.value);
    },
    removeTransactionshValue(state, action: PayloadAction<{ id: string }>) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addTransactionshValue, removeTransactionshValue } = transactionsSlice.actions;
export default transactionsSlice.reducer;
