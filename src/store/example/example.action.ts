
import { createAction } from "../../utils/reducer/reducer.utils";
import { EXAMPLE_ACTION_TYPE } from "./example.action.types"




export type ExampleObject = {
    id: number;
    description: string;
    isDone: false;
}

export const fetchData = () => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA);
export const fetchDataSuccess = (exampleDatas: ExampleObject[]) => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA_SUCCESS, exampleDatas);
export const fetchDataFail = (error: Error) => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA_FAIL, error);
