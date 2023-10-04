export default async function(host, route){
    const res = await fetch(`https://${host}/api/${route}`);

    return await res.json();
}