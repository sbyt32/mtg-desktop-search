import Home from './pages/Home.svelte'
import Decks from './pages/Deck/Decks.svelte'
import Inventory from './pages/Inventory/Inventory.svelte'
import Decklist from './pages/Deck/Decklist.svelte'

export default {
    '/':Home,
    '/Decks':Decks,
    '/Inventory':Inventory,
    '/Decklist/:deckname':Decklist,
}
