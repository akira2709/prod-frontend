import { UserContext } from "~/app"
import { useContext } from "react"
import "./index.css"
import clsx from "clsx"

interface Props {
	className?: string
	param?: string
}

export const UserData = (props: Props) => {
	const user = useContext(UserContext)
	console.log(user)
	if (user) {
		if (user.isLoading) {
			return <div className={"loader absolute mt-6"}></div>
		} else {
			if (user.data[0][props.param]) {
				return <p className={clsx(props.className, "mt-2")}>{ user.data[0][props.param] }</p>
			} else {
				return <p>Нет данных</p>
			}
		}
	} else {
		return <>Sorry no data</>
	}
}
