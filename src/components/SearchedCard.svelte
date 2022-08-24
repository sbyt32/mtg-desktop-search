<script>
  import { shopName} from '../scripts';
  import slugify from 'slugify'
  import BuyButton from './searchedCard/BuyButton.svelte';
  export let cardImg, cardName, shopTCG, shopMTGO

</script>
<div class="col p-2 text-center border">
    <a  href='#/card/{slugify(`${cardName}`, {
        lower:true
        })}'>
        <img src={cardImg} class="logo" alt="{cardName}" />
    </a>
    
      <div class="row gx-1 gy-1 pt-2">
            <svelte:component this={BuyButton} shop={$shopName} shopTCG={shopTCG} shopMKM={slugify(cardName, {
              replacement: "+"
            })}
            />
            <a href="https://www.cardhoarder.com/cards/{shopMTGO}" class="col btn border">Cardhoarder</a>
      </div>

</div>

<style>
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
</style>