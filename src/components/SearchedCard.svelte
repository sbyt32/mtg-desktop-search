<script>
  import slugify from 'slugify'

  export let cardImg, cardName
</script>

<div class="col p-2">
    <a href='#/card/{slugify(`${cardName}`, {
      lower:true
    })}'>
        <img src={cardImg} class="logo" alt="{cardName}" />
    </a>
    
      <div class="row gx-1 gy-1 pt-2">
              <button class="col">TCGPlayer</button>
              <button class="col">Cardmarket</button>
              <button class="col">Cardhoarder</button>
      </div>

</div>

<style>
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  </style>