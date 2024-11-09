import { ReactNode } from "react"
import "./index.css"
import clsx from "clsx"

interface Props {
	children?: ReactNode
	className?: string
}

const Frame = (props: Props) => {
	return (
		<div className={clsx("border-2 border-asphalt", props.className)}>
			{ props.children }
		</div>
	)
}
export { Frame }
