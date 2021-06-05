import { put, takeLatest } from 'redux-saga/effects';
import { sendMessageSuccess, sendMessageFailed, sendMessageAction, startLoading } from '../slices/sendMessage';
import { doPost } from '../../utils/request';

function* sendMessage({ payload }: any) {
  yield put(startLoading());
  try {
    const res = yield doPost('/send-wish', payload);
    yield put(sendMessageSuccess(res));
  } catch (err) {
    yield put(sendMessageFailed(err.message));
  }
}

export function* sagas() {
  yield takeLatest(sendMessageAction, sendMessage);
}
