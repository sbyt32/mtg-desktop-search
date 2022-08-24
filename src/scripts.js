  import {push} from 'svelte-spa-router'
  import slugify from 'slugify'
  import {airtable} from '../secrets.json'
  import { writable } from 'svelte/store'

async function getCardImage(i) {
    const airTableResponse = await fetch(`https://api.airtable.com/v0/${airtable.base}/${airtable.table}?api_key=${airtable.api}`)
    const airTableJson = await airTableResponse.json();
    const scryfallResponse = await fetch(`https://api.scryfall.com/cards/${airTableJson.records[i].fields.scryfall}`)
    const scryfallJson = await scryfallResponse.json()
    return scryfallJson
}

async function handleSubmit(cardToSearch) {
    let searchCard = await fetch(`https://api.scryfall.com/cards/search?q=${cardToSearch}`)
    let searchCardResult = await searchCard.json();
    push(`/search/${slugify(`${cardToSearch}`, {
      lower:true
    })}`)
    if (searchCardResult.object === "list") {
      return searchCardResult
    } else {
      throw new Error(searchCardResult.details);
    }
}

// For Buttons
export const shopName = writable('TCGPlayer')
export const options = [
  {shop: "TCGPlayer", scryLink: "purchase_uris.tcgplayer" },
  {shop: "CardMarket", scryLink: "purchase_uris.cardmarket"}
]

export {getCardImage,handleSubmit}