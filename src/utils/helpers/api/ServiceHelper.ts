// import * as axios from "@types/axios"
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import { ServiceConfig, ServiceTodoType } from "./Service.settings";



export class ServiceHelper<TResponse, TRequest>
{
  client: AxiosInstance;
  url?: ServiceTodoType;
  config: AxiosRequestConfig = ServiceConfig.TodoApiConfig;

  constructor() {
    this.client = axios.create(this.config);
  }


  getAsync = async (param?: TRequest) => await this.client.get<TResponse>(ServiceTodoType.GET_TODOS).then((response: AxiosResponse) => response.data);
  postAsync = async (param?: TRequest) => await this.client.post<TResponse>(ServiceTodoType.ADD_TODO, param).then((response: AxiosResponse) => response.data);
  putAsync = async (param?: TRequest) => await this.client.put<TResponse>("todos", param).then((response: AxiosResponse) => response.data);
  deleteAsync = async (param?: TRequest) => await this.client.delete<TResponse>("todos").then((response: AxiosResponse) => response.data);

}