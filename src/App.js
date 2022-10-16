import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';
// import { increment } from './store/counterSlice';
import { countAction } from './store/counterSlice';

function App() {
	const [input, setInput] = useState('');
	const count = useSelector((state) => {
		// useSelector รับ parameter เป็น call-back function เป็นค่า state => state ทุกตัวที่อยู่ใน store
		// useSelector จะคล้ายๆ useContext คือไปดึงค่าจาก store มาใช้งาน
		// console.log(state);
		return state.count.count;
	});

	const dispatch = useDispatch();
	// dispatch ใช้คู่กับ actions ที่กำลังจะเกิดขึ้น

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(countAction.addBy(Number(input)));
	};

	return (
		<div className='App'>
			<h1>Counter!</h1>
			<h1>{count}</h1>
			{/* <button onClick={() => dispatch(increment())}>+1 point</button> */}
			<button onClick={() => dispatch(countAction.increment())}>
				+1 point
			</button>
			<button onClick={() => dispatch(countAction.decrement())}>
				-1 point
			</button>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={(e) => setInput(e.target.value)}></input>
				<button>submit</button>
			</form>
		</div>
	);
}

export default App;
