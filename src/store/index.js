import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
	reducer: {
		count: counterSlice,
		auth: authSlice,
	},
});
