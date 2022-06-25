// import * as axios from "@types/axios"
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";






export class ServiceHelper<TResponse,TRequest>
{
  client: AxiosInstance;
  config: AxiosRequestConfig = {
    baseURL: "http://localhost:3004/",
    timeout: 31000,
    headers: {
      Accept: "application/json",
      //Authorization = `Bearer ${this.api_token}`
    }
  }

  constructor() {
    this.client = axios.create(this.config);
  }


  getAsync = async (param?: TRequest) => {
    console.log(param)
    return await this.client.get<TResponse>(`todos`).then((response: AxiosResponse) => response.data);
  };





}