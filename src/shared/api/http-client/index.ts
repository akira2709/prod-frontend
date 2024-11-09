import ky from "ky";


export const httpClient = ky.create({
	prefixUrl: "https://672feb3566e42ceaf15eff5c.mockapi.io/prod/api"
})
