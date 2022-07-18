import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Home from './Home';
import Login from './Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	const { currUser } = useSelector(state => state.auth);
	console.log('🚀 ~ file: App.js ~ line 13 ~ App ~ currUser', currUser);

	useEffect(() => {
		if (currUser) {
			navigate('./home', { replace: true });
		} else {
			navigate('./login', { replace: true });
		}
	}, [currUser]);

	return (
		<div className="App">
			<Outlet />
		</div>
	);
}

export default App;
