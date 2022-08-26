  import {push} from 'svelte-spa-router'
  import slugify from 'slugify'
  import {airtable} from '../secrets.json'
  import { writable } from 'svelte/store'

async function getCardImage(i) {
    const airTableResponse = await fetch(`https://api.airtable.com/v0/${airtable.base}/${airtable.table}?api_key=${airtable.api}`)
    const airTableJson = await airTableResponse.json();
    const scryfallResponse = await fetch(`https://api.scryfall.com/cards/${airTableJson.records[i].fields.scryfall}`)
    const scryfallJson = await scryfallResponse.json()
    if (scryfallJson.layout === "modal_dfc" || scryfallJson.layout === "transform") {
      console.log("This card,", scryfallJson.name, "is a Transform or Flip Card!");
    } else {
      console.log(scryfallJson.name ,"is NOT a Transform or Flip Card!");
    }
    return scryfallJson
}

async function handleSubmit(cardToSearch) {
    let searchCard = await fetch(`https://api.scryfall.com/cards/search?q=${cardToSearch}`)
    let searchCardResult = await searchCard.json();
    push(`/search/${slugify(`${cardToSearch}`, {
      lower:true
    })}`)
    if (searchCardResult.object === "list") {
      console.log(searchCardResult);
      return searchCardResult
    } else {
      throw new Error(searchCardResult.details);
    }
}

// For Buttons
export const shopName = writable('TCGPlayer')
export const shopShort = writable('tcgplayer')
export const shopLink = writable('https://www.tcgplayer.com/search/all/product?q=')
export const options = [
  {shop: "TCGPlayer", link: "https://www.tcgplayer.com/search/all/product?q=", short: "tcgplayer" },
  {shop: "CardMarket", link: "https://www.cardmarket.com/en/Magic/Products/Search?searchString=", short: "mkm"}
]

function titleCase(str) {
	str = str.toLowerCase();
	str = str.split('_')
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)		
	}
	return str.join(' ')
}

export {getCardImage,handleSubmit,titleCase}