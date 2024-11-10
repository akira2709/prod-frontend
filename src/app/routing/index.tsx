import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Profile from "~/pages/profile";
import { MainLayout } from "~/shared/ui";

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

export const router = createBrowserRouter(routes, { basename: '/prod-frontend' })
