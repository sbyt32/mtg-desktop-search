<script>
    	function handleClick() {
		alert('Button Clicked');
	}
</script>

<div class="columns fullheight">
    <div class="column is-align-self-center">
        <a href="#/Decks">
            <blaze-card>
                <blaze-image alt="random placeholder image" width="1024" height="768" filter="mountains" likes/>
            </blaze-card>
        </a>
    </div>
    <div class="column is-align-self-center">
        <a href="#/Inventory">
            <blaze-card on:click={handleClick}>
                <blaze-image alt="random placeholder image" width="1024" height="768" filter="cards" likes/>
            </blaze-card>
        </a>
    </div>
</div>

<style>
    .fullheight {
        height: 75%;
    }
</style>

