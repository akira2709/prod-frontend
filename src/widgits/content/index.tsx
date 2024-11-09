import { useContext } from "react"
import { LoginContext } from "~/pages/home"

export const Content = () => {
	const setLoginOpen = useContext(LoginContext)

	return (
		<main className={"w-[80vw] h-full ml-[10vw] pt-20"}>
			<div className={"mt-8 w-full"}>
				<div className={"flex gap-12"}>
					<div>
						<h1 className={"text-2xl"}>Меньше стресса</h1>
						<p className={"text-md"}>при разделении</p>
						<p className={"text-md"}>расходов с командой</p>
					</div>
					<div>
						<img src="prod-frontend/src/assets/phone.svg" alt="" />
					</div>
				</div>
				<div className={"mt-4"}>
					<p>Отслеживайте общие расходы и баланс</p>
					<p>в поездках, в группах, с друзьями и семьёй.</p>
				</div>
			</div>
			<button className={"w-[200px] h-12 bg-blue mt-4 text-[white] hover:scale-95 transition-all duration-300"} onClick={() => setLoginOpen(true)}>Регистрация</button>
			<div className={"mt-8"}>
				<img src="prod-frontend/src/assets/some-image.jpg" alt="" />
			</div>
		</main>
	)
}
