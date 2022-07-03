
import { takeLatest, put, call, all } from "typed-redux-saga"
import { ServiceHelper } from "../../utils/helpers/api/ServiceHelper";

import { ExampleObject, fetchDataSuccess, fetchDataFail } from "./example.action"
import { EXAMPLE_ACTION_TYPE } from "./example.action.types";


// eslint-disable-next-line require-yield
function* fetchData() {
    try {
        const client = new ServiceHelper<ExampleObject[], number>();
        const res: ExampleObject[] = yield call(client.getAsync, 1);
        yield put(fetchDataSuccess(res));

    } catch (error) {
        put(fetchDataFail((error as Error)));
    }
}


function* addData({ type, payload }: any) {
    try {
        console.log("add")
        console.log(payload)
        console.log(type)
        const client = new ServiceHelper<ExampleObject, ExampleObject>();
        const res: ExampleObject = yield call(client.postAsync, (payload as ExampleObject));

        // yield call(fetchData);

    } catch (error) {
        put(fetchDataFail((error as Error)));
    }
}

function* updateData(payload: ExampleObject) {
    try {
        const client = new ServiceHelper<ExampleObject, ExampleObject>();
        const res: ExampleObject[] = yield call(client.postAsync, payload);

        // yield call(fetchData);

    } catch (error) {
        put(fetchDataFail((error as Error)));
    }
}


function* onFetchDataAsync() {

    yield takeLatest<EXAMPLE_ACTION_TYPE>(EXAMPLE_ACTION_TYPE.FETCH_DATA, fetchData);
}
function* onAddDataAsync() {

    yield takeLatest<EXAMPLE_ACTION_TYPE>(EXAMPLE_ACTION_TYPE.ADD_DATA, addData);
}

function* onApdateDataAsync() {

    yield takeLatest<EXAMPLE_ACTION_TYPE>(EXAMPLE_ACTION_TYPE.ADD_DATA, addData);
}


export function* exampleSaga() {

    yield all([
        call(onFetchDataAsync),
        call(onAddDataAsync),
        call(onApdateDataAsync)
    ]);
}