export async function get_data(url, setFunc){
    let res = await fetch(url)
    let data = await res.json()
    console.log('Fetch');
    return setFunc(data)
}