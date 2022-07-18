import { createSlice } from '@reduxjs/toolkit';

// const todosState = [{ id: '', text: '', isDone: false }];
// const userState = { id: '', login: '', password: '', todos: todosState };
// const initialState = {
// 	currUser: userState,
// 	otherUsers: [userState],
// };

const initialState = {
	currUser: null,
	otherUsers: [],
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			console.log('🚀 ~ file: authSlice.js ~ line 16 ~ action', action);
			const currUser = {
				id: Date.now(),
				login: action.payload.login,
				password: action.payload.password,
				todos: [],
			};

			let currUserIndex = -1;

			if (state.otherUsers.length > 0) {
				currUserIndex = state.otherUsers.findIndex(
					el => el.login === currUser.login && el.password === currUser.password,
				);
			}

			if (currUserIndex !== -1) {
				state.currUser = state.otherUsers.splice(currUserIndex, 1);
			} else {
				state.currUser = currUser;
			}
		},
		logout: state => {
			state.otherUsers.push(state.currUser);
			state.currUser = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
