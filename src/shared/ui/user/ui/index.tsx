import { UserContext } from "~/app"
import { useContext } from "react"
import "./index.css"
import clsx from "clsx"

interface Props {
	className?: string
	param: string
}

export const UserData = (props: Props) => {
	const user = useContext(UserContext)

	const content = () => {
		if (props.param === "id") return user?.data?.userId
		if (props.param === "phonenumber") return user?.data?.phonenumber
		if (props.param === "card") return user?.data?.card
	}


	if (user) {
		if (user.isLoading) {
			return <div className={"loader"}></div>
		} else {
			if (user.data) {
				return <p className={clsx(props.className, "mt-2")}>{ content() }</p>
			} else {
				return <p>Нет данных</p>
			}
		}
	} else {
		return <>Пользователь не авторизован</>
	}
}
