// LET THIS AMEND TO CARDS.JSON
//  BUILD PAGE OR COMPONENT FOR IT
 
 // import exportAPI from "./scryfall importer";
    import data from '../data/cards2.json'

    // Declare stuff
let cardToSearch = ""
var query = []
const scryLink = 'https://api.scryfall.com/cards/named?exact='
const withSet = '&set='

    // Make links into array in query
for (let i = 0; i < data.length; i++) {
    cardToSearch = scryLink.concat(data[i].name.replace(" ","_"),withSet,data[i].set)
    query.push(cardToSearch)
    // query is an array, do query[i] or query[number] to fetch certain ones
        // console.log(query[0]) does give bonecrusher
}

    // Prepare the API
async function queryAPI(url) {
    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
};

    // this gives bonecrusher
// console.log(queryAPI(query[0]))

// function outputAPI() {
//     for (let i = 0; i < data.length; i++) {
//         console.log(queryAPI(query[i]))
//     }
//     return 
// }
let outputAPI = queryAPI(query[0])