<script>
    import optionSelect from '../data/optionSelect.json'
    let fiery = .20

// querying cards, update scryfall importer
let cardFind = 'https://api.scryfall.com/cards/named?exact=fiery_impulse'
    async function queryAPI(url) {
        const response = await fetch(url, {
            method: 'GET'
        });
        return response.json();
    };

let outputAPI = queryAPI(cardFind)


// this is for multiple things
export let params = {};
let repeat = 1;
$: {
    repeat = 1
    if (params && params.repeat) {
        repeat = parseInt(params.repeat, 10)
        if (repeat < 1) {
            repeat = 1
        }
    }
}



</script>

<div>
    <table class="c-table">
        <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
                {#each [...optionSelect.purchaseHistory.cards] as head}
                    <td class="c-table__cell">{head}</td>
                {/each}
            </tr>
        </thead>
        {#await outputAPI then card}
            {#each Array(repeat) as _}
                <tbody class="c-table__body">
                    <tr class="c-table__row">
                        <td class="c-table__cell">April 3rd, 2022</td>
                        <td class="c-table__cell">Fiery Impulse</td>
                        <td class="c-table__cell">EX</td>
                        <td class="c-table__cell">3</td>
                        <td class="c-table__cell">$0.20</td>
                        <td class="c-table__cell">${card.prices.usd}</td>
                        <td class="c-table__cell">${parseFloat(card.prices.usd - fiery).toFixed(2)*3}</td>
                    </tr>
                </tbody>   
            {/each}
        {/await}
    </table>
</div>