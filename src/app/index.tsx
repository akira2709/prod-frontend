import { RouterProvider } from "react-router-dom"
import "./styles/global.css"
import { router } from "./routing"

const App = () => {
	return (
		<RouterProvider router={ router } />
	)
}
export default App
