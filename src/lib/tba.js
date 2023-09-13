export default async function(host, route){
    const res = await fetch(`http://${host}/api/${route}`);

    return await res.json();
}