
import { all,call } from 'typed-redux-saga';
import { exampleSaga } from "./example/example.saga";

export function* rootSaga() {
    yield all([call(exampleSaga)]);
}