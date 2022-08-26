<script>
import SearchedCard from "./components/SearchedCard.svelte";
import {handleSubmit} from './scripts'

export let params;
</script>


{#await handleSubmit(params.query) then images}
<h4>{images.total_cards} results for "{params.query}"</h4>
<div class="row row-cols-sm-2 row-cols-lg-4">
    {#each images.data as image}
        <SearchedCard 
        cardLayout={image.layout}
        cardImg={image.image_uris.normal}
        cardName={image.name}
        cardSet={image.set}
        shopMTGO={image.prices.tix}
        shopPaperEUR={image.prices.eur}
        shopPaperUSD={image.prices.usd}
        />
    {/each}
</div>
    {:catch error}
    <p>{error}</p>
{/await}
