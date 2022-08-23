<script>
export let params;
const formats = ['Standard', "Pioneer", "Explorer", "Modern", "Pauper", "Legacy", "Vintage", "Commander"]

async function singleSearch(card) {
	const scryfallResp = await fetch(`https://api.scryfall.com/cards/named?exact=${card}`)
	const scryfallJson = await scryfallResp.json();
	console.log(scryfallJson.legalities);
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
			<li class="list-group-item">{image.oracle_text}</li>
		</ul>
		<div class="text-center">
			<a href={image.purchase_uris.tcgplayer} class="btn" tabindex="-1" role="button">TCGPlayer - ${image.prices.usd}</a>
			<a href={image.purchase_uris.cardhoarder} class="btn" tabindex="-1" role="button">MTGO - {image.prices.tix} tix</a>
		</div>
	</div>


<div class="pt-3">
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
					<!-- I got no idea how to have these easily line up, idk why but it's set up so that every format is a different value but i guess that is the most sense making -->
					<!-- {Object.keys(image.legalities)} -->
					idk fix it later
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