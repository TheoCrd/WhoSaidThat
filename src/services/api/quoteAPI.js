const getQuoteData = async function () {
    const response = await fetch('https://animechan.vercel.app/api/random')
    if (response.status == 200){
        const data = response.json();
        return data;
    } else {
        new Error(response.statusText)
    }
}
export {getQuoteData}