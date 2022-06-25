import { RootState } from "../store";
import { ExampleState } from "./example.reducer";


export const getExampleObjects = (state: RootState): ExampleState => {


    return state.ExampleReducer;
}   