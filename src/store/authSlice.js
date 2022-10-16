import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, isLogin: false },
	reducers: {
		login: (state, action) => {},
		logout: (state, action) => {},
	},
});

// console.log(authSlice);

export default authSlice.reducer;
