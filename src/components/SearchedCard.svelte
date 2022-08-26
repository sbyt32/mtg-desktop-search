<script>
  import slugify from 'slugify'
  import { crossfade } from 'svelte/transition';
  import BuyButton from '../components/searchedCard/BuyButton.svelte';
  export let cardImg = '', cardName, cardSet, shopPaperUSD, shopPaperEUR, shopMTGO, cardLayout, cardImgBack = ''
  let cardFront = true
  function flipDFC() {
    if (cardFront == true) {
      cardFront = false
      console.log(cardFront);
    } else {
      cardFront = true
      console.log(cardFront);
    }
  }
</script>
<div class="col p-2 border">
  <span style="color: transparent; position:absolute" class="align-baseline p-3" aria-hidden="true">{cardName}</span>
    <a href='#/card/{cardSet}/{slugify(`${cardName}`, {lower:true})}'>
      {#if cardLayout === "split" ||  cardLayout === "normal"}
        <img src={cardImg} class="logo" alt="{cardName}" style="display: block; margin: 0 auto"/>
      {:else if cardLayout === "modal_dfc" || cardLayout === "transform"}

        <div class="card-flip">
          <div class="card-flip-front">
            <img src={cardImg} class="logo" alt="{cardName}" style="display: block; margin: 0 auto"/>
          </div>
          <div class="card-flip-back">
            <img src={cardImgBack} class="logo" alt="{cardName}" style="display: block; margin: 0 auto"/>
          </div>
        </div>


      {/if}
    </a>
    <!-- <button class="btn" on:click={flipDFC}>asd</button> -->
    
      <div class="row gx-1 gy-1 pt-2">
        {#if shopPaperUSD === null && shopPaperEUR === null}
        <svelte:component this={BuyButton} noValue={true}/>
        {:else}
        <svelte:component this={BuyButton} shopPaper={cardName} shopPaperUSD={shopPaperUSD} shopPaperEUR={shopPaperEUR} />
        {/if}
        <a href="https://www.cardhoarder.com/cards?data%5Bsearch%5D={slugify(cardName, {lower: true})}" class="col btn border cardhoarder">{shopMTGO} TIX</a>
      </div>

</div>

<style>
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .card-flip {
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
    .card-flip-front {
      transform: translateZ(50px);
    }
    .card-flip-back {
      transform: rotateY(180deg) translateZ(50px);
    }
</style>
