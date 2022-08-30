<script>
  import slugify from 'slugify'
  import { push } from 'svelte-spa-router';
  import BuyButton from '../components/searchedCard/BuyButton.svelte';
  // export let cardImg = '', cardName, cardSet, shopPaperUSD, shopPaperEUR, shopMTGO, cardImgBack = '', hasCardFaces = false
  export let card_faces = '', name, set, prices, hasCardFaces = false, image_uris = '', layout = ''
  let cardBack = true

  function toSingleCard() {
    push(`/card/${set}/${slugify(`${name}`, {lower:true})}`)
  }
</script>
<div class="col p-2 border">
  <span style="color: transparent; position:absolute" class="align-baseline p-3" aria-hidden="true">{name}</span>


	      {#if hasCardFaces}
	      <div class="position-relative">
	        <div on:click={() => toSingleCard()} class="logo">
	          <img src={card_faces[0].image_uris.normal} alt="temp" class:dfcCard="{cardBack === false}" class="position-relative top-0 start-0" >
	          <img src={card_faces[1].image_uris.normal} alt="temp" class:dfcCard="{cardBack === true}" class="position-absolute top-0 end-0">  
	        </div>
	        <button on:click={() => cardBack = !cardBack} class="btn btn-secondary position-absolute top-50 end-0 translate-middle-y">Flip</button>
	      </div>
	      {:else}
	      <img src="{image_uris.normal}" class="logo" alt="{name}" style="display: block; margin: 0 auto" on:click={() => toSingleCard()}/>
	      {/if}

      <div class="row gx-1 gy-1 pt-2">
        {#if prices.usd === null && prices.eur === null}
        <svelte:component this={BuyButton} noValue={true}/>
        {:else}
        <svelte:component this={BuyButton} shopPaper={name} shopPaperUSD={prices.usd} shopPaperEUR={prices.eur} />
        {/if}
        <a href="https://www.cardhoarder.com/cards?data%5Bsearch%5D={slugify(name, {lower: true})}" class="col btn border cardhoarder">{prices.tix} TIX</a>
      </div>

</div>

<style>
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .position-relative .btn {
      opacity: 75%;
    }
</style>
