import { UserData } from "~/shared/ui/user"

export const ProfileContent = () => {

	return (
		<main className={"w-[80vw] h-full ml-[10vw] pt-28"}>
			<div className={"flex"}>
				<div className={"h-96 w-[220px] items-center grid"}>
					<h1 className={"text-3xl font-bold w-fit"}>Ваш профиль</h1>
					<div className={"w-full aspect-square"}>
						<img src="assets/user-avatar.svg" alt="avatar" className={"w-full aspect-square"} />
					</div>
					<p className={"text-xl"}>Измените свой аватар</p>
					<button className={"bg-blue w-52 h-12 text-md border rounded-lg text-[#fff] hover:scale-95 transition-all duration-300"}>Выберите файл</button>
				</div>
				<div className={"h-96 w-full"}>
					<div>
						<div className={"flex px-32 pt-10 text-2xl"}>
							<div>
								<p>Ваше имя</p>
								<UserData param={"id"} />
							</div>
						</div>
						<div className={"flex px-32 pt-10 text-2xl"}>
							<div>
								<p>Ваш номер телефона</p>
								<UserData param={"phonenumber"}/>
							</div>
						</div>
						<div className={"flex px-32 pt-10 text-2xl"}>
							<div>
								<p>Ваш номер карты</p>
								<UserData param={"card"}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
