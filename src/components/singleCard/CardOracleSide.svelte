<script>
    export var side, name, type_line, oracle_text, dfc = false, flavor_text

    function oracleSideCheck(side) {
        if(side % 2 == 0) {
            // this'll be on the right side
            return 'r'
        } else {
            return 'l'
        }
    }
</script>

    {#await oracleSideCheck(side) then padSide}
    <div class="col p{padSide}-0">
        <li class="list-group-item">{name}</li>
        <li class="list-group-item">{type_line}</li>
        <li class="list-group-item">{oracle_text}</li>
    {#if dfc && !(flavor_text === undefined) }
        <li class="list-group-item"><i>{flavor_text}</i></li>
    {/if}
    </div>
    {/await}
<style>
    .pr-0 {
    padding-right: 0%;
	}
	.pl-0 {
		padding-left: 0% ;
	}
    li {
        white-space: pre-line;
    }
</style>

