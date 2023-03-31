const getQuoteData = async function () {
    const response = await fetch('https://animechan.vercel.app/api/random')
    if (response.status == 200){
        const data = response.json();
        console.log(data)
        return data;
    } else {
        new Error(response.statusText)
    }
}
const getAllAnime = async function () {
    const response = await fetch('https://animechan.vercel.app/api/available/anime')
    if (response.status == 200){
        const data = response.json();
        console.log(data)
        return data;
    } else {
        new Error(response.statusText)
    }
}
export {getQuoteData, getAllAnime}