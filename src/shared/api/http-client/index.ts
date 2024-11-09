import ky from "ky";


export const httpClient = ky.create({
	prefixUrl: "http://127.0.0.1:3000"
})
