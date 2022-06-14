<script>
    import optionSelect from '../data/optionSelect.json'
    import {upDown, posNeg} from '../scripts/apiValues'
    import {link} from 'svelte-spa-router'
    // import orderHistory from '../data/orderHistory.json'

let cardFind = 'https://api.scryfall.com/cards/named?exact=fiery_impulse'

async function queryAPI(url) {
    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
};

let outputAPI = queryAPI(cardFind)
let fiery = .20

let cata = (6.70 * 2)
let spirit = (2.09 * 2)
let surg = (17.51 * 2)
let contain = (.30)
let council = (3.15)
let deaf = (1.86 * 2)
let exq = (1.04 *2)
let kaldra = 4.67
let spike = (4.25 * 4)
let revok = 1.01
let recru = 29.58
let rip = 6.55
let keg = 18.00

let total = 167.52
let current = (cata + spirit + surg + contain + council + deaf + exq + kaldra + spike + revok + recru + rip + rip +keg)
</script>

<div>
    <table class="c-table">
        <!-- This is for Purchase Orders -->
        <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
                {#each [...optionSelect.purchaseHistory.orders] as head}
                    <td class="c-table__cell">{head}</td>
                {/each}
            </tr>
        </thead>
        <!-- this should eventually hit the  -->
        <tr class="c-table__row">
            <td class="c-table__cell"><a href="/History/1" use:link>Jun 21, 2021</a></td>
            <td class="c-table__cell">Jun 24, 2021</td>
            <td class="c-table__cell">{total}</td>
            <td class="c-table__cell">${current.toFixed(2)}</td>
            <td class="c-table__cell {posNeg(current - total)}">${(current - total).toFixed(2)}</td>
        </tr>
    </table>
</div>