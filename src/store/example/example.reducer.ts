import { ExampleObject } from "./example.action"
import { EXAMPLE_ACTION_TYPE } from "./example.action.types"


export type ExampleState = {

    data: ExampleObject[],
    isLoading: boolean,
    error: Error

}


const EXAMPLE_INITIAL_STATE: ExampleState = {
    data: [
        {
            id: 1,
            description: 'test1',
            isDone:false,
        }
    ],
    isLoading: true,
    error: new Error()
}

export const exampleReducer = (state: ExampleState = EXAMPLE_INITIAL_STATE, action: any): ExampleState => {

    switch (action.type) {
        case EXAMPLE_ACTION_TYPE.FETCH_DATA_SUCCESS:
            return {
                data: action.payload,
                isLoading: false,
                error: new Error()
                
            };
        case EXAMPLE_ACTION_TYPE.FETCH_DATA_FAIL:
            return {
                data:state.data,
                isLoading: false,
                error: new Error()

            };
        default:
            return state;
    }
}