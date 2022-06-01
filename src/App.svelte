<script>
	import Columns from './pages/components/Navigation.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes.js'
	import Footer from './pages/components/Footer.svelte'
	export let appName
	export let appVers
</script>

<Columns appName={appName} appVers={appVers}/>
<Router {routes}/>
<Footer appName={appName} appVers={appVers}/>

