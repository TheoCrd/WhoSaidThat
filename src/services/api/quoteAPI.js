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

const getAllCharacter = async function () {
    const response = await fetch('https://animechan.vercel.app/api/available/character')
    if (response.status == 200){
        const data = response.json();
        console.log(data)
        return data;
    } else {
        new Error(response.statusText)
    }
}

async function getSearchedQuoteByAnime(title, page) {
    const response = await fetch(
        `https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${page}`
    );

    if (response.status == 200) {
        return response.json();
    } else {
        console.log("error");
    }
}

async function getSearchedQuoteByCharacter(name, page) {
    const response = await fetch(
        `https://animechan.vercel.app/api/quotes/character?name=${name}&page=${page}`
    );

    if (response.status == 200) {
        return response.json();
    } else {
        console.log("error");
    }
}
export {
    getQuoteData, 
    getAllAnime, 
    getAllCharacter, 
    getSearchedQuoteByAnime, 
    getSearchedQuoteByCharacter
}