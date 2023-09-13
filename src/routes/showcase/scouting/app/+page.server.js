import { redirect } from "@sveltejs/kit";
import tba from "$lib/tba";

export async function load({ url }) {
    const events = await tba(url.host, `events/2023`);

    return{
        events,
        competition:null,
        scout:"Guest",
        host:url.host
    }
}

export const actions = {
    default: async function({ request }){
        const input = await request.formData();
        const data = JSON.parse(input.get("data"));

        throw redirect(307, `./app/results/${btoa(JSON.stringify(data))}`);
    }
}