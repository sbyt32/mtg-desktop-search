import App from './App.svelte';

const app = new App({
	target: document.body,
		props: {
			appName: 'Preordain (Testing)',
			appVers: '0.0.1'
		}
	
});

export default app;