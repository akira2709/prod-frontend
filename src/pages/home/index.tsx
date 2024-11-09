import { Header } from "~/widgits/header"
import { Content } from "~/widgits/content"
import { Login } from "~/widgits/login"
import { createContext, SetStateAction, useState, Dispatch } from "react"

const LoginContext = createContext <Dispatch<SetStateAction<boolean>>>(() => {})
export { LoginContext }

const Home = () => {
	const [loginOpen, setLoginOpen] = useState<boolean>(false)

	const toggleLoginOpen = () => {
		setLoginOpen(!loginOpen)
	}

	return (
		<div className={"w-[100vw] h-[100vh]"}>
			<Login isOpen={loginOpen} setOpen={() => setLoginOpen(!loginOpen)}/>
			<LoginContext.Provider value={toggleLoginOpen}>
				<Header></Header>
				<Content></Content>
			</LoginContext.Provider>
		</div>
	)
}
export default Home
