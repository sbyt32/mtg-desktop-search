
 <script>
	import Router from 'svelte-spa-router'
	import routes from '../routes.js'
	import SearchedCard from './components/SearchedCard.svelte';
	import Searchbar from './components/Searchbar.svelte';
	import SearchResults from './SearchResults.svelte'
	import {getCardImage, handleSubmit} from './scripts.js'
	import Home from './Home.svelte';

    let count = [0,1,2,3]
	export var pin = ''

	
  </script>

<div class="container">
<Searchbar bind:cardToSearch={pin} on:submit={handleSubmit(pin)}/>
	<main>
		<Router {routes}/>
	</main>
</div>

