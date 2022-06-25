type ActionWithPayload<T, P> = {
    type: T;
    payload: P
}

type Action<T extends string> = {
    type: T
}




//method overloading
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string>(type: T, payload: void): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P) {

    return { type, payload };
}
