<script>
	import Router from 'svelte-spa-router'
	import routes from '../routes.js'
	import Searchbar from './components/Searchbar.svelte';
	import ShopChoice from './components/ShopChoice.svelte';
	import {handleSubmit} from './scripts.js'
	var pin = ''

  </script>
  

<div class="container">
	<div class="row py-2 px-0">
		<div class="col">
			<Searchbar bind:cardToSearch={pin} on:submit={handleSubmit(pin)}/>
		</div>
		<div class="col-sm-4 col-lg-3">
			<ShopChoice/>
		</div>
	</div>
	<main>
		<Router {routes}/>
	</main>
</div>
