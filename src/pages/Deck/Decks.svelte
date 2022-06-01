<script>
    import Head from "../components/Header.svelte";
    import optionSelect from '../data/optionSelect.json'
    import Decks from '../data/decks.json'
    import {slide} from 'svelte/transition'
    import { chart } from "svelte-apexcharts";
    
    // eventually i need to count the amount of values in Decks.deckArchetype

    // for (let i = 0; i < optionSelect.deckOrg.formats.length; i++) {
    //     let forSting = (optionSelect.deckOrg.formats[i].slice(0,3))
    //     console.log(forSting.concat("Count"))
    // };

    // let pioCount = ''
    // for (let i = 0; i < Decks.length; i++) {
    //     pioCount = pioCount + [i];
    // }

    // console.log(pioCount)

var optFor = {
        series: [4,1,2,4,2],
        chart: {
        width: 380,
        type: 'donut',
    },
    labels: optionSelect.deckOrg.formats,
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'right'
        }
        }
    }],
};

var optArc = {
        series: [1,2,3],
        chart: {
        width: 380,
        type: 'donut',
    },
    labels: optionSelect.deckOrg.archetypes,
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'right'
        }
        }
    }]
};
</script>


<Head heroName={optionSelect.header.headname[1]} heroText={optionSelect.header.bottomtext[1]} />

<div class="columns u-higher">
    <div class="column">
        <h1>Deck Formats</h1> 
        <div use:chart={optFor}/>
    </div>
        <div class="column">
            <h1>Deck Archetypes</h1> 
            <div use:chart={optArc}/>
        </div>   
</div>

<div class="columns u-higher" in:slide="{{delay:200, duration:700}}">
    <div class="column">
        <table class="c-table">
            <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                    {#each [...optionSelect.options.decks] as top}
                        <th class="c-table__cell">{top}</th>
                    {/each}
                </tr>
            </thead>
            <tbody class="c-table__body">
                {#each Decks as deck}
                    <tr class="c-table__row">
                        <td class="c-table__cell">{deck.deckName}</td>
                        <td class="c-table__cell">{deck.deckFormat}</td>
                        <td class="c-table__cell">{deck.deckOwned/deck.deckTotal*100}%</td>                  
                        <td class="c-table__cell">{deck.deckLastUpdate} </td>
                        <td class="c-table__cell">${deck.deckCost}</td>
                        <td class="c-table__cell"><a href="{deck.deckLink}" target="_blank">Here</a></td>
                    </tr>
                {/each}
            </tbody>

        </table>
        
    </div>
</div>
