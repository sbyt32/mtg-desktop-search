<script>
import SearchedCard from "./components/SearchedCard.svelte";
import { handleSubmit } from "./scripts";
export let params;
</script>

<div class="row row-cols-2">
    {#await handleSubmit(params.query) then images}
        {#each images.data as image}
            <SearchedCard 
            cardImg={image.image_uris.normal}
            cardName={image.name}                
            />
        {/each}
    {/await}
</div>
