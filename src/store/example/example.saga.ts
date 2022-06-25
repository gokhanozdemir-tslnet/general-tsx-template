
import { takeLatest, put, call, all } from "typed-redux-saga"
import { ServiceHelper } from "../../utils/helpers/axiosServiceHelper";

import { ExampleObject, fetchDataSuccess, fetchDataFail } from "./example.action"
import { EXAMPLE_ACTION_TYPE } from "./example.action.types";


// eslint-disable-next-line require-yield
function* fetchData() {
    try {
        const client = new ServiceHelper<ExampleObject[],number>(); 
        const res: ExampleObject[] = yield call(client.getAsync,1);
        yield put(fetchDataSuccess(res));

    } catch (error) {
        put(fetchDataFail((error as Error)));
    }
}


function* onFetchDataAsync() {

    yield takeLatest<EXAMPLE_ACTION_TYPE>(EXAMPLE_ACTION_TYPE.FETCH_DATA, fetchData);
}

export function* exampleSaga() {

    yield all([call(onFetchDataAsync)]);
}