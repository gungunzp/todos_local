// import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/authSlice';

function Login() {
	const dispatch = useDispatch();
	const userState = { id: '', login: '', password: '', todos: [] };

	const loginHandler = () => {
		dispatch(login(userState));
		// localStorage.setItem('currUser', JSON.stringify(userState));
	};

	return (
		<div className="Login">
			<h1>Please, log in or sign up</h1>
			<input />
			<input type="password" />
			<input type="button" value="Login / Sign up" onClick={loginHandler} />
		</div>
	);
}

export default Login;
