<script>
    import { options, shopName } from "../../scripts";
    export let shop, shopTCG, shopMKM
</script>

{#key shopName}
    {#if options[0].shop === $shopName}
        <a href="https://www.tcgplayer.com/product/{shopTCG}" class="col btn border">{shop}</a>
    {:else}
        <a href="https://www.cardmarket.com/en/Magic/Products/Search?searchString={shopMKM}" class="col btn border">
            {shop}
        </a>
    {/if}
{/key}
