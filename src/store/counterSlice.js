import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { count: 123456 },
	reducers: {
		// สร้าง reducer function เขียนเป็น obj ที่ key ของ obj คือค่า action
		// convention ของ key จะเป็นตัวเล็กเท่านั้น เช่น increment , decremant
		increment: (state, action) => {
			// state คือค่าปัจจุบัน
			state.count = state.count + 1;
		},
		decrement: (state, action) => {
			state.count = state.count - 1;
		},
		addBy: (state, action) => {
			state.count = state.count + action.payload;
		},
	},
});

export default counterSlice.reducer;

export const countAction = counterSlice.actions;

// export const { increment, decrement } = counterSlice.actions;
