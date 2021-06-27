import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  regsiterRequest,
  regsitersError,
  registerSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutSuccess,
  logoutRequest,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

// const loading = createReducer(false, {
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [removeContactRequest]: () => true,
//   [removeContactSuccess]: () => false,
//   [removeContactError]: () => false,
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   loading,
// });

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV === 'development',
//   middleware,
// });

// const persistor = persistStore(store);

export default combineReducers({
  user,
  token,
});
