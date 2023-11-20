import { request } from "../components/utils/axios-interceptors";

export const allNewsRequest = () => request({url:"/articles"});
