  import {push} from 'svelte-spa-router'
  import slugify from 'slugify'
  import {airtable} from '../secrets.json'

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
    return searchCardResult
}

export {getCardImage,handleSubmit}