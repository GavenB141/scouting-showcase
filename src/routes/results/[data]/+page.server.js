export async function load({params}) {
    return JSON.parse(atob(params.data))
}