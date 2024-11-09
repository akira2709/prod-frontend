import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "~/pages/home";
import { MainLayout } from "~/shared/ui";

const Profile = lazy(() => import("~/pages/profile"))

const routes = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/profile",
				element: <Profile />
			}
		]
	},
]

export const router = createBrowserRouter(routes, { basename: "/prod-frontend" })
