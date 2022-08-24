
<script>
    import { createEventDispatcher,} from 'svelte';
    export let cardToSearch = ''

    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit');

    const onKeyPress = e => {
      if (e.charCode === 13) submit()
    }

  </script>

<div class="input-group">
  <input class="form-control" placeholder="Search A Magic Card!"
    bind:value={cardToSearch} on:keypress={onKeyPress}
  >
  <button disabled={!cardToSearch} on:click={submit}>Search</button>
</div>


