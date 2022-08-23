<script>
    import { createEventDispatcher } from 'svelte';
    export let cardToSearch = ''
    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit');

  </script>

		<div class="input-group">
			<input class="form-control" placeholder="Search A Magic Card!" aria-label="Username" bind:value={cardToSearch}>
			<button disabled={!cardToSearch} on:click={submit}>Search</button>
		</div>


