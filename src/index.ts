import { routeRequest } from "./router";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return routeRequest(request)
	},
} satisfies ExportedHandler<Env>;
