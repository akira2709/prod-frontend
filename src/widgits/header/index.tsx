import { Link } from "~/shared/ui/link"
import { EventFrame } from "../event"
import { NoticeFrame } from "../notice"
import { useContext } from "react"
import { LoginContext } from "~/pages/home"
import { useNavigate } from "react-router-dom"


export const Header = () => {
	const setLoginOpen = useContext(LoginContext)
	const navigate = useNavigate()
	return (
		<header className={"w-full fixed bg-transparent h-20 flex justify-center items-center text-[white] text-xl select-none z-50"}>
			<div className={"w-[80%] h-[90%] bg-green border rounded-2xl flex content-center"}>
				<div className={"h-full aspect-square flex items-center ml-4 w-44 cursor-pointer"} onClick={() => navigate("/")}>
					<img src="assets/logo.svg" alt="logo" className={"h-12 aspect-square"}/>
					<p className={"w-24 ml-3"}>Split Pay</p>
				</div>

				<div className={"w-full h-full items-center justify-around flex"}>
					<EventFrame></EventFrame>
					<NoticeFrame></NoticeFrame>
					<Link onClick={() => setLoginOpen(true)}>Профиль</Link>
				</div>
			</div>
		</header>
	)
}
