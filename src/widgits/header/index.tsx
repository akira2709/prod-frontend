import { Link } from "~/shared/ui/link"
import { EventFrame } from "../event"
import { NoticeFrame } from "../notice"


export const Header = () => {
	return (
		<header className={"w-full fixed bg-transparent h-20 flex justify-center items-center text-[white] text-xl select-none"}>
			<div className={"w-[80%] h-[90%] bg-green border rounded-2xl flex content-center"}>
				<div className={"h-full aspect-square flex items-center ml-4 w-44 cursor-pointer"}>
					<img src="prod-frontend/src/assets/logo.svg" alt="logo" className={"h-12 aspect-square"}/>
					<p className={"w-24 ml-3"}>Split Pay</p>
				</div>

				<div className={"w-full h-full items-center justify-around flex"}>
					<EventFrame></EventFrame>
					<NoticeFrame></NoticeFrame>
					<Link>Профиль</Link>
				</div>
			</div>
		</header>
	)
}
