import { combineReducers } from '@reduxjs/toolkit';
import sendMessageReducer from '../stores/slices/sendMessage';
const rootReducer = combineReducers({
  sendMessageReducer,
});
export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
