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

// ตัวอย่าง async, await

// export const addTodo = title => async dispatch => {
//   try {
//     const res = await axios.post(
//       'http://localhost:8007/todos',
//       { title },
//       { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//     );
//     dispatch(createTodo(res.data.todo));
//   } catch (err) {}
// };

// export const fetchTodo = () => async dispatch => {
//   try {
//     const res = await axios.get('http://localhost:8007/todos', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     });
//     dispatch(getAllTodo(res.data.todos));
//   } catch (err) {
//     console.log(err);
//     alert('fetch error');
//   }
// };
