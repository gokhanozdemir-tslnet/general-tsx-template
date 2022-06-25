import createSagaMiddleware from "redux-saga"
import { applyMiddleware, compose, createStore } from "typed-redux"
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";



const sagaMiddleWare = createSagaMiddleware();
const middleWares: any = [sagaMiddleWare];
const composedEnchancers = compose(applyMiddleware(...middleWares));
export const store:any = createStore(rootReducer, undefined, composedEnchancers);

console.log(typeof store.getState)
export type RootState = any; // ReturnType<typeof store>
sagaMiddleWare.run(rootSaga);