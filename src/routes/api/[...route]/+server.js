import { json } from "@sveltejs/kit"

export async function GET({params, fetch}){
    const res = await fetch(`https://thebluealliance.com/api/v3/${params.route}`,{
        headers:{
            "X-TBA-Auth-Key":"Q1YSIahY4sPvLqZ2Os9N5yBxjZnlyG7ewPW55THzWt2Rep7tL3lKLdZ01ujUBxIR"
        }
    });

    return json(await res.json());
}