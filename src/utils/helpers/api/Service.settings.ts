
import { AxiosRequestConfig } from "axios";


export enum ServiceTodoType {
    GET_TODOS = "/todos",
    ADD_TODO = "/todos"
}

const TodoApiConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:3004/",
    timeout: 31000,
    headers: {
        Accept: "application/json",
        //Authorization = `Bearer ${this.api_token}`
    }
}

const ProductApiConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:3004/",
    timeout: 31000,
    headers: {
        Accept: "application/json",
        //Authorization = `Bearer ${this.api_token}`
    }
}

export const ServiceConfig = {
    TodoApiConfig,
    ProductApiConfig

}

