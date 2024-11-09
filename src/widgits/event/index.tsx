import { Link } from "~/shared/ui/link"
import { Frame } from "~/shared/ui/frame"
import { ReactNode, useState } from "react"
import clsx from "clsx"

interface Props {
	children?: ReactNode
	className?: string
}

const EventFrame = (props: Props) => {
	const [isOpen, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen(!isOpen)
	}

	return (
		<div className={clsx("w-fit relative", props.className)}>
			<Link onClick={() => toggleOpen()}>Событие</Link>
			<Frame className={isOpen ? "open top-10 -left-[85px]" : "close"}>
				{ props.children }
			</Frame>
		</div>
	)
}
export { EventFrame }
