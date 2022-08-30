<script>
import BuyButton from "./components/searchedCard/BuyButton.svelte";
import {push} from 'svelte-spa-router'
import slugify from "slugify";
import { shopName, titleCase, card_facesCheck, shopShort, shopCurrency, shopLink, options } from "./scripts";
import CardOracleSide from "./components/singleCard/CardOracleSide.svelte";

let cardLayout = ''
export let params;
const formats = ['Standard', "Pioneer", "Explorer", "Modern", "Pauper", "Legacy", "Vintage", "Commander"]

async function singleSearch(card) {
	const scryfallResp = await fetch(`https://api.scryfall.com/cards/named?exact=${card}&set=${params.set}`)
	const scryfallJson = await scryfallResp.json();
	// multiple versions
	const scryfallRespSet = await fetch(`https://api.scryfall.com/cards/search?q=${card}&unique=prints`)
	const scryfallJsonSet = await scryfallRespSet.json()
	cardLayout = card_facesCheck(scryfallJson)
	console.log(scryfallJsonSet.data);
	return {scryfallJson, cardLayout, scryfallJsonSet};
}
let cardBack = true
let cardTurn = false

</script>

{#await singleSearch(params.name) then image}
	<div class="py-3">
		<ul class="list-group">
			<li class="list-group-item">{image.scryfallJson.name}</li>
			<li class="list-group-item text-center">
				{#if image.cardLayout == 'dfc'}
					<div class="position-relative">
						<img src={image.scryfallJson.card_faces[0].image_uris.png} alt="temp" class:dfcCard="{cardBack === false}" class="position-relative top-0 start-0">
						<img src={image.scryfallJson.card_faces[1].image_uris.png} alt="temp" class:dfcCard="{cardBack === true}" class="position-absolute top-0 end-0">	
					</div>
					<button on:click={() => cardBack = !cardBack} class="btn btn-secondary">Flip</button>
					{:else}
					<img src={image.scryfallJson.image_uris.png} alt="temp filler" class:turn="{cardTurn === true}" class="{image.cardLayout}">
						{#if image.cardLayout == 'split-normal' || image.cardLayout == "split-aftermath"}
							<button on:click={() => cardTurn = !cardTurn} class="btn btn-secondary">Flip</button>
						{/if}
				{/if}
			</li>

			{#if image.cardLayout == 'dfc' || image.cardLayout == 'split-normal' || image.cardLayout == 'split-aftermath'}
			<div class="row">
				<CardOracleSide
					side={[0]}
					dfc=true
					{...image.scryfallJson.card_faces[0]}
				/>
				<CardOracleSide
					side={[1]}
					dfc=true
					{...image.scryfallJson.card_faces[1]}
				/>
			</div>
			{:else}
			<li class="list-group-item">{image.scryfallJson.type_line}</li>
			<li class="list-group-item">{image.scryfallJson.oracle_text}</li>
			 {#if !(image.scryfallJson.flavor_text === undefined)}
				<li class="list-group-item"><i>{image.scryfallJson.flavor_text}</i></li>
			 {/if}
			{/if}
			<li class="list-group-item">Illustrated by: {image.scryfallJson.artist}</li>
			<li class="list-group-item">
				<div class="row row-cols-4">
					{#each formats as format}
						<div class="col">{format}</div>
						<div class="col {image.scryfallJson.legalities[format.toLowerCase()]} text-white legality text-center">
							{titleCase((image.scryfallJson.legalities[format.toLowerCase()]))}
						</div>
					{/each}
				</div>
			</li>
		</ul>
	</div>


<div class="text-center pb-3">
	<BuyButton shopPaper={image.scryfallJson.name} shopPaperEUR={image.scryfallJson.prices.eur} shopPaperUSD={image.scryfallJson.prices.usd}>
		{$shopName} -
	</BuyButton>
	<a href="https://www.cardhoarder.com/cards?data%5Bsearch%5D={slugify(image.scryfallJson.name, {lower: true})}" class="col btn border cardhoarder">MTGO - {image.scryfallJson.prices.tix} TIX</a>
</div>


<div class="pb-3">
	<ol class="list-group">
		<li class="list-group-item text-center">Printings</li>
	{#each image.scryfallJsonSet.data as set}
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<div on:click={() => push(`/card/${set.set}/${slugify(set.name, {lower:true})}`)}><i class="ss ss-{set.set} fs-4"></i> {set.set_name}</div>
				<div class="d-flex justify-content-end">
						{#if set.hasOwnProperty('purchase_uris')}
							{#each options as shop}
								{#if set.purchase_uris.hasOwnProperty(shop.shop.toLowerCase()) && !(set.prices[shop.currency] == null)}
									<a class="badge {shop.short} text-dark" href={set.purchase_uris[shop.shop.toLowerCase()]} target="_blank"> {shop.currencySymbol.concat(set.prices[shop.currency])}</a>
								{:else if set.prices[shop.currency.concat('_foil')]}
									<a class="badge {shop.short} text-dark" href={set.purchase_uris[shop.shop.toLowerCase()]} target="_blank"> ✨ {shop.currencySymbol}{set.prices[shop.currency.concat('_foil')]}</a>
								{:else}
									<span class="badge {shop.short} disabled text-dark">N/A</span>
								{/if}
							{/each}
						{/if}
				</div>
			</li>
	{/each}
	</ol>
</div>


{/await}

<style>
	li {
		white-space: pre-line;
	}
	.legality {
		border-radius: 7.5px;
	}
	.banned {
		background-color: red;
	}
	.not_legal {
		background-color: grey;
	}
	.legal {
		background-color: green;
	}

	.split-normal {
		transform: rotate(0deg);
		transition: 500ms;
	}
	.split-normal.turn {
		transform: rotate(90deg);
		transition: 500ms;
	}
	.split-aftermath {
		transform: rotate(0deg);
		transition: 300ms;
	}
	.split-aftermath.turn {
		transform: rotate(-90deg);
		transition: 500ms;
	}
	span.disabled {
		opacity: 75%;
	}
</style>