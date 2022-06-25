import { combineReducers } from "typed-redux";
import { exampleReducer } from "./example/example.reducer";


export const rootReducer = combineReducers(
    {
        ExampleReducer: exampleReducer
    }
);