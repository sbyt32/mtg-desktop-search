  import {airtable} from '../secrets.json'
  import { writable } from 'svelte/store'

async function getCardImage(i) {
    const airTableResponse = await fetch(`https://api.airtable.com/v0/${airtable.base}/${airtable.table}?api_key=${airtable.api}`)
    const airTableJson = await airTableResponse.json();
    const scryfallResponse = await fetch(`https://api.scryfall.com/cards/${airTableJson.records[i].fields.scryfall}`)
    const scryfallJson = await scryfallResponse.json()
    let results = parseQuickSearch(scryfallJson)
    return results
}

async function handleSubmit(cardToSearch) {
    console.log('hi');
    let searchCard = await fetch(`https://api.scryfall.com/cards/search?q=${cardToSearch}`)
    let searchCardResult = await searchCard.json();
    if (searchCardResult.object === "list") {
        let results = parseQuickSearch(searchCardResult)
      return {searchCardResult, results}
    } else {
      throw new Error(searchCardResult.details);
    }
}

function parseQuickSearch(scryResp) {
  const quickInfo = ['name', 'set', 'prices', 'layout']
  // Is a List
  if (scryResp.object == 'list') {
    let vibeList = new Array()
      for (let x = 0; x < scryResp.data.length; x++) {

        var obj = {}

        for (let i = 0; i < quickInfo.length; i++) {
          obj[quickInfo[i]] = scryResp.data[x][quickInfo[i]]

          // Determines whether or not a card gets a certain pathing based on DFC or not
            if (i === quickInfo.length - 1) {
              if (scryResp.data[x].hasOwnProperty('card_faces') && !(scryResp.data[x].layout === 'split')) {
                obj["card_faces"] = scryResp.data[x].card_faces
              } else {
                obj["image_uris"] = scryResp.data[x].image_uris
              }

            }
  
        }
        vibeList.push(obj)
      }
      var obj = {}
      return vibeList
  } 
  // Not a List
  else {
    const vibes = {}
    let results = Object.create(vibes)
    quickInfo.forEach((e,i) => {
      results[quickInfo[i]] = scryResp[quickInfo[i]]
      
      if (scryResp.hasOwnProperty('card_faces') && !(scryResp.layout === "split")) {
        results.card_faces = scryResp.card_faces
      } else {
        results.image_uris = scryResp.image_uris
      }
    })
    return results
  }
}

function card_facesCheck(scry) {
  let cardLayout = ''
  if (scry.hasOwnProperty('card_faces') && scry.layout == "split") {
    cardLayout = 'split-normal'
    console.log('this is a split card...');
      if (scry.keywords.find(e => e == "Aftermath")) {
        cardLayout = 'split-aftermath'
        console.log('with aftermath!');
      }
  } else if (scry.hasOwnProperty('card_faces')) {
    cardLayout = 'dfc'
    console.log('this is a dfc / transform card');
  } else {
    cardLayout = 'normal'
    console.log('this is a normal card');
  }
  console.log(cardLayout);
  return cardLayout
}


// For Buttons
export const shopName = writable('TCGPlayer')
export const shopShort = writable('tcgplayer')
export const shopLink = writable('https://www.tcgplayer.com/search/all/product?q=')
export const shopCurrency = writable('usd')
export const options = [
  {shop: "TCGPlayer", link: "https://www.tcgplayer.com/search/all/product?q=", short: "tcgplayer", currency: "usd", currencySymbol: "$" },
  {shop: "CardMarket", link: "https://www.cardmarket.com/en/Magic/Products/Search?searchString=", short: "mkm", currency: "eur", currencySymbol: "€"},
  {shop: "Cardhoarder", link: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=", short: "cardhoarder", currency: "tix", currencySymbol: "TIX "}
]

function titleCase(str) {
	str = str.toLowerCase();
	str = str.split('_')
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)		
	}
	return str.join(' ')
}

export {getCardImage,handleSubmit,titleCase, card_facesCheck}