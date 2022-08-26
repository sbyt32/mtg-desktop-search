<script>
    import { shopShort, shopLink } from "../../scripts";
    import slugify from "slugify";
    export let shopPaperUSD = '', shopPaper = '', shopPaperEUR = ''
    export var noValue = false

</script>


{#if noValue === true}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="col btn border disabled {$shopShort}" aria-disabled="true">N/A</a>
{:else}

    <a href={$shopLink.concat(slugify(shopPaper, {replacement: "+"}))} class="col btn border {$shopShort}">
        <slot>

        </slot>
        {#if $shopShort === "tcgplayer"}
            ${shopPaperUSD}
        {:else}
            €{shopPaperEUR}
        {/if}
    </a>
{/if}