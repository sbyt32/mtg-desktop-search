<script>
import slugify from 'slugify';

	import Router, { push } from 'svelte-spa-router'
	import routes from '../routes.js'
	import Searchbar from './components/Searchbar.svelte';
	import ShopChoice from './components/ShopChoice.svelte';
	var pin = ''

  </script>
  
<div class="row py-2 sticky-top" style="background-color:white; background: linear-gradient(180deg, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%)">
	<div class="col">
		<Searchbar bind:cardToSearch={pin} on:submit={() => push(`/search/${pin}`)}/>
	</div>
	<div class="col-sm-4 col-lg-3">
		<ShopChoice/>
	</div>
</div>

<div class="container">
	<main>
		<Router {routes}/>
	</main>
</div>
