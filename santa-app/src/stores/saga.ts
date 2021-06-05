import { fork } from 'redux-saga/effects';
import { sagas as sendMessageSaga } from '../stores/sagas/sendMessage';

export default function* rootSaga() {
  yield fork(sendMessageSaga);
}
