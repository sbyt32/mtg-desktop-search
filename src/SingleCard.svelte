<script>
import BuyButton from "./components/searchedCard/BuyButton.svelte";
import slugify from "slugify";
import { shopName, titleCase } from "./scripts";

export let params;
const formats = ['Standard', "Pioneer", "Explorer", "Modern", "Pauper", "Legacy", "Vintage", "Commander"]

async function singleSearch(card) {
	const scryfallResp = await fetch(`https://api.scryfall.com/cards/named?exact=${card}&set=${params.set}`)
	const scryfallJson = await scryfallResp.json();
	return scryfallJson;
}
</script>

{#await singleSearch(params.name) then image}
	<div class="py-3">
		<ul class="list-group">
			<li class="list-group-item">{image.name} </li>
			<li class="list-group-item text-center">            
				<img src={image.image_uris.png} alt="temp filler">
			</li>
			<li class="list-group-item">{image.type_line}</li>
			<li class="list-group-item" style="white-space: pre-line">{image.oracle_text}</li>
		</ul>
		<div class="text-center py-1">
			<BuyButton shopPaper={image.name} shopPaperEUR={image.prices.eur} shopPaperUSD={image.prices.usd}>
				{$shopName} -
			</BuyButton>
			<a href="https://www.cardhoarder.com/cards?data%5Bsearch%5D={slugify(image.name, {lower: true})}" class="col btn border cardhoarder">MTGO - {image.prices.tix} TIX</a>
		</div>
	</div>


<div class="">
	<div class="row border">
		<div class="col text-center">
			Legality
		</div>
		<div class="row row-cols-4">

			{#each formats as format}
				<div class="col">
					{format}
				</div>
				<div class="col">
					{titleCase((image.legalities[format.toLowerCase()]))}
				</div>
			{/each}
		</div>
	</div>
</div>

{/await}

<style>
	img {
		filter: drop-shadow(0 0 .5em #646cffaa);
	}
</style>