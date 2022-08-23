import Home from './src/Home.svelte'
import SingleCard from './src/SingleCard.svelte'
import SearchResults from './src/SearchResults.svelte'

const routes = {
    '/': Home,
    '/card/:name': SingleCard,
    '/search/:query': SearchResults
}

export default routes