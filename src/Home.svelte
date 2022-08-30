<script>
import { getCardImage } from "./scripts";
import SearchedCard from './components/SearchedCard.svelte'
let count = [0,1,2,3,4]


</script>
<div class="container">
    <main>
        <div class="row row-cols-sm-2 row-cols-lg-4">

            {#each count as i}
                {#await getCardImage(i) then image}
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
                    
                {/await}
            {/each}
        </div>
    </main>
</div>

