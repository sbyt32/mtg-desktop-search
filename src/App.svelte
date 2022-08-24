<script>
	import Router from 'svelte-spa-router'
	import routes from '../routes.js'
	import Searchbar from './components/Searchbar.svelte';
	import ShopChoice from './components/ShopChoice.svelte';
	import {handleSubmit} from './scripts.js'
	var pin = ''

  </script>
  

<div class="container">
	<Searchbar bind:cardToSearch={pin} on:submit={handleSubmit(pin)}/>
	<ShopChoice/>
	<main>
		<Router {routes}/>
	</main>
</div>
