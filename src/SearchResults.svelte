<script>
import SearchedCard from "./components/SearchedCard.svelte";
import {handleSubmit} from './scripts'
export let params;
console.log(params);
</script>


{#await handleSubmit(params.query) then images}
<h4>{images.searchCardResult.total_cards} results for "{params.query}"</h4>
<div class="row row-cols-sm-2 row-cols-lg-4">
    {#each images.results as image}
        {#if image.hasOwnProperty('card_faces') && !(image.layout === "split")}
        <SearchedCard 
            hasCardFaces=true
            {...image}
        />
        {:else}
        <SearchedCard
            {...image}
        />
        {/if}

    {/each}
</div>
    {:catch error}
    <p>{error}</p>
{/await}
