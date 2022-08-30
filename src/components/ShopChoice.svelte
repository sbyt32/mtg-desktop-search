<script>
import { options, shopName, shopShort, shopLink, shopCurrency } from "../scripts";
let shopNameChoice = options[0].shop

function chooseShop() {
  shopName.update(shop => shopNameChoice.shop)
  shopShort.update(shop => shopNameChoice.short)
  shopLink.update(shop => shopNameChoice.link)
  shopCurrency.update(shop => shopNameChoice.currency)
}
</script>
<select class="form-select" bind:value={shopNameChoice} on:change={() => chooseShop()}>
    <option value={options[0]} selected>{options[0].shop}</option>
    <option value={options[1]}>{options[1].shop}</option>
</select>