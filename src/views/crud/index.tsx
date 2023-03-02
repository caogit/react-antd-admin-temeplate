import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Button, Form, Input, Table, Select } from "antd";
import { useSearchFun, useSearchWork } from "./hooks/useSearch";
interface IProps {
	children?: ReactNode;
}
const Crud: FC<IProps> = () => {
	const { form, optionsChange, popupScroll, city } = useSearchFun();
	const { Option } = Select;
	return (
		<div className="crud-box">
			<div className="search">
				<Form layout={"inline"} form={form}>
					<Form.Item label="姓名" name={"name"}>
						<Input placeholder="请输入姓名" />
					</Form.Item>
					<Form.Item label="年龄" name={"age"}>
						<Input placeholder="请输入年龄" />
					</Form.Item>
					<Form.Item label="城市" name={"city"}>
						<Select
							placeholder="下拉更新城市"
							onChange={optionsChange}
							onPopupScroll={popupScroll}
							allowClear
							style={{ width: "100%" }}
						>
							{city &&
								city.map(item => (
									<Option key={item.id} value={item.id}>
										{item.city}
									</Option>
								))}
						</Select>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
export default memo(Crud);
