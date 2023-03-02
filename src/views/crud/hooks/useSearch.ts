import { useRef, useState, useEffect } from "react";
import { getCity } from "@/api/modules/crud";
import { Crud } from "@/api/interface/index";
import { Form } from "antd";
// import { useScroll } from "@/hooks/useScroll";
import { useRequest } from "ahooks";
const useSearchWork = () => {
	const [city, setCity] = useState<Crud.ICity[]>();
	useEffect(() => {
		getCityData();
	}, []);
	/**
	 * @description 获取城市数据
	 */
	const getCityData: () => Promise<Crud.ICity[]> = () => {
		return new Promise((resolve, reject) => {
			getCity()
				.then(res => {
					if (!res.data) return;
					setCity([...res.data]);
					resolve(res.data);
				})
				.catch(err => {
					reject(err);
				});
		});
	};
	/**
	 * @description 节流获取城市数据 //当滚动到最底部25像素的时开始加载
	 */

	const { data, loading, run } = useRequest(getCityData, {
		throttleWait: 1000,
		manual: true
	});
	useEffect(() => {
		if (data && data.length > 0) {
			setCity(preval => {
				if (preval) {
					return [...preval, ...data];
				}
			});
		}
	}, [data]);
	return { city, run, loading };
};

const useSearchFun = () => {
	const [form] = Form.useForm();
	const { run, city, loading } = useSearchWork();

	/**
	 * @description  选中options
	 */
	const optionsChange = (val: string) => {};

	/**
	 * @description 滚动Option
	 */
	const popupScroll = (e: any) => {
		const { target } = e;
		if (target.scrollTop + target.offsetHeight > target.scrollHeight - 25) {
			run();
		}
	};

	return {
		city,
		optionsChange,
		popupScroll,
		form,
		loading
	};
};

export { useSearchFun, useSearchWork };
