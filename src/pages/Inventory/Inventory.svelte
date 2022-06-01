<script>
import invList from '../data/cards.json'
import OptionSelect from '../data/optionSelect.json'
import Head from "../components/Header.svelte";
import {slide} from 'svelte/transition';
</script>

<Head heroName={OptionSelect.header.headname[0]} heroText={OptionSelect.header.bottomtext[0]}/>

<div class="u-letter-box-medium">
    <blaze-autocomplete id="bars" placeholder="Find a card..."></blaze-autocomplete>
</div>

    <!-- table -->
<div class="columns">
    <div class="column" in:slide="{{delay:200, duration:700}}">
        <table class="c-table u-higher">
            <thread class="c-table__head">
                <tr class="c-table__row c-table__row--heading tr-nohover" >
                    {#each [...OptionSelect.options.inventory] as top}
                    <th class="c-table__cell">{top}</th>
                    {/each}
                </tr>
            </thread>
            <tbody class="c-table__body">
                    {#each invList as data}
                        <tr class="c-table__row">
                            <td class="c-table__cell"><a href={data.scryfall_uri} target="_blank">{data.name}</a></td>
                            <td class="c-table__cell is-uppercase">{data.set}</td>
                            <td class="c-table__cell">{data.set_name}</td>
                            <td class="c-table__cell">{data.collector_number}</td>
                            <td class="c-table__cell">${data.prices.usd}</td>
                            <td class="c-table__cell">{data.artist}a</td>
                        </tr>
                    {/each}
            </tbody>
        </table>
    </div>
</div>