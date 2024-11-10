import { Link } from "~/shared/ui/link"
import { Frame } from "~/shared/ui/frame"
import { useState } from "react"
import clsx from "clsx"

interface Props {
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
			<Frame isOpen={isOpen} className={"-left-[85px]"}>
				<div className={"grid w-full justify-center p-4"}>
					<div className={"flex gap-2"}>
						<img src="assets/calendar.svg" alt="calendar" />
						<Link className={"after:!bg-asphalt"}>Создать событие</Link>
					</div>
					<div className={"flex gap-2"}>
						<img src="assets/calendar.svg" alt="calendar" />
						<Link className={"after:!bg-asphalt"}>Создать ивент</Link>
					</div>
				</div>
			</Frame>
		</div>
	)
}
export { EventFrame }
