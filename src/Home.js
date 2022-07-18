// import './App.css';

import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/authSlice';

function Home() {
	// const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="Home">
			<aside>
				<button type="button" value="Logout" onClick={() => dispatch(logout())}>
					Logout
				</button>
			</aside>

			<List />
		</div>
	);
}

export default Home;
