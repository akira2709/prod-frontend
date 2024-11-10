import { Header } from "~/widgits/header"
import { ProfileContent } from "~/widgits/profileContent"


const Profile = () => {
	return (
		<div className={"w-[100vw] h-[100vh]"}>
			<Header />
			<ProfileContent />
		</div>
	)
}
export default Profile
