export default async function(host, route){
    const res = await fetch(`http://${host}/showcase/scouting/app/api/${route}`);

    return await res.json();
}