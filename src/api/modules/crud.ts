import { PORT1 } from "../config/servicePort";
import { Crud } from "../interface";
import http from "@/api";

// * 获取城市
export const getCity = () => {
	return http.get<Crud.ICity[]>(PORT1 + "/city", {}, { headers: { noLoading: true } });
};
