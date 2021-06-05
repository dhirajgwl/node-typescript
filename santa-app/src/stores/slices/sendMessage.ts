import { createAction, createSlice } from '@reduxjs/toolkit';
const SLICE_NAME = 'sendMessage';
export type SendMessageResponse = {
  message: string;
  loading: boolean;
  errorMessage: string;
};
const initialState: SendMessageResponse = {
  message: '',
  loading: false,
  errorMessage: '',
};

const sendMessageSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.message = '';
      state.errorMessage = '';
    },
    startLoading: (state) => {
      state.loading = true;
    },
    sendMessageSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload.data.success;
      state.errorMessage = '';
    },
    sendMessageFailed: (state, { payload }) => {
      state.loading = false;
      state.message = '';
      state.errorMessage = payload;
    },
  },
});

const withPayloadType =
  <T>() =>
  (t: T) => ({ payload: t });

const sendMessageAction = createAction(`${SLICE_NAME}/sendMessage`, withPayloadType<any>());

export const { sendMessageSuccess, sendMessageFailed, startLoading, clearState } = sendMessageSlice.actions;
export { sendMessageAction };

export default sendMessageSlice.reducer;
