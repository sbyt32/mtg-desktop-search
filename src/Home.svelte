<script>
import { getCardImage } from "./scripts";
import SearchedCard from './components/SearchedCard.svelte'
let side = 0
let count = [0,1,2,3,4]

</script>
<div class="container">
    <main>
        <div class="row row-cols-sm-2 row-cols-lg-4">
        {#each count as i}
            {#await getCardImage(i) then image}
                {#if image.layout === "normal"}
                <SearchedCard
                    cardLayout="normal"
                    cardImg={image.image_uris.normal}
                    cardName={image.name}
                    cardSet={image.set}
                    shopMTGO={image.prices.tix}
                    shopPaperEUR={image.prices.eur}
                    shopPaperUSD={image.prices.usd}
                />

                {:else if image.layout === "split"}
                <SearchedCard
                    cardLayout={image.layout}
                    cardImg={image.image_uris.normal}
                    cardName={image.name}
                    cardSet={image.set}
                    shopMTGO={image.prices.tix}
                    shopPaperEUR={image.prices.eur}
                    shopPaperUSD={image.prices.usd} 
                />

                <!-- TODO: The issue with this is that it shows both the front and back side. I only want to see the front OR the back side. Look at the SearchedCard.svelte file-->
                {:else if image.layout === "transform" || image.layout === "modal_dfc"}
                <SearchedCard
                    cardLayout={image.layout}
                    cardImg={image.card_faces[0].image_uris.normal}
                    cardImgBack={image.card_faces[1].image_uris.normal}
                    cardName={image.name}
                    cardSet={image.set}
                    shopMTGO={image.prices.tix}
                    shopPaperEUR={image.prices.eur}
                    shopPaperUSD={image.prices.usd}
                />
                
                {/if}
            {/await}
        {/each}
        </div>
    </main>
</div>