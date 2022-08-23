<script>
import { getCardImage } from "./scripts";
import SearchedCard from './components/SearchedCard.svelte'
let count = [0,1,2,3]

</script>
<div class="container">
    <main>
        <div class="row row-cols-2">
        {#each count as i}
            {#await getCardImage(i) then image}
                <SearchedCard
                    cardImg={image.image_uris.normal}
                    cardName={image.name}
                />
            {/await}
        {/each}
        </div>
    </main>
</div>