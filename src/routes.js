import Home from './pages/Home.svelte'
import Decks from './pages/Deck/Decks.svelte'
import Inventory from './pages/Inventory/Inventory.svelte'
import Decklist from './pages/Deck/Decklist.svelte'
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory.svelte'
import PurchaseCards from './pages/PurchaseHistory/PurchHistCards.svelte'

export default {
    '/':Home,
    '/Decks':Decks,
    '/Inventory':Inventory,
    '/Decklist/:deckname':Decklist,
    '/History':PurchaseHistory,
    '/History/:repeat': PurchaseCards
}
