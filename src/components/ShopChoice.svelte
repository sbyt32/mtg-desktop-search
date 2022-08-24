<script>
import { options, shopName } from "../scripts";
let shopChoiceName = options[0].shop

function chooseShop() {
    shopName.update(shop => shopChoiceName.shop)
}
</script>


<select class="form-select" bind:value={shopChoiceName} on:change={() => chooseShop()}>
  {#each options as option}
    <option value={option}>{option.shop}</option>
  {/each}
</select>