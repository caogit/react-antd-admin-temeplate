// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import Crud from "@/views/crud/index";

// crud模块
const crudRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/crud/index",
				// element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
				element: <Crud />,
				meta: {
					requiresAuth: true,
					title: "Crud",
					key: "crud"
				}
			}
		]
	}
];

export default crudRouter;
