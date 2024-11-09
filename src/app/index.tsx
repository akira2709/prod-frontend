import { RouterProvider } from "react-router-dom"
import "./styles/global.css"
import { router } from "./routing"
import { useQuery } from "react-query"
import { getUser } from "~/shared/api/user"
import { createContext } from "react"

const UserContex = createContext<object | null>(null)

const App = () => {
	const query = useQuery({ queryKey: ["user"], queryFn: getUser })

	return (
		<UserContex.Provider value={query}>
			<RouterProvider router={ router } />
		</UserContex.Provider>
	)
}
export default App
export { UserContex }
