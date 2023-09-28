import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
    value: number;
}

// Начальное состояние
const initialState: ItemState = {
    value: 0,
};

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Экспортируем редьюсер
export default itemSlice.reducer;

// Экспортируем действия
export const { increment, decrement, incrementByAmount } = itemSlice.actions;
