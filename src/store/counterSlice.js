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
