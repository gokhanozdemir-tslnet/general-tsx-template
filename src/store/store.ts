

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga"
import { applyMiddleware, compose, createStore } from "typed-redux"
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";



const persistConfig = {
    key: "root",
    storage,
    blacklist:['']
}

const persistedReducer:any = persistReducer(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleware();
const middleWares: any = [sagaMiddleWare];
const composedEnchancers = compose(applyMiddleware(...middleWares));
export const store: any = createStore(persistedReducer, undefined, composedEnchancers);

export const persistor:any = persistStore(store);

// console.log(typeof store.getState)
export type RootState = any; // ReturnType<typeof store>
sagaMiddleWare.run(rootSaga);