<script>
import Nav from './comps_of_comps/Nav.svelte';
import colToggle from './colToggle'
import { fly } from 'svelte/transition'
export let appName
export let appVers
</script>

<Nav/>

<blaze-drawer id="col" position="left" dismissable transition:fly="{{duration: 1000}}">
	<blaze-card>
<!-- the top -->
		<blaze-card-header>
			<button on:click={colToggle}>
				<i class="fa-solid fa-bars"></i>
			</button>
			<h2 class="c-heading u-xlarge">
			{appName}
			<div class="c-heading__sub">{appVers}</div>
			</h2>
		</blaze-card-header>
<!-- catagories -->
		<blaze-card-body>
			<ul class="menu-list">
				<li>
					<a href="#/Inventory">Inventory</a>
						<ul>
							<li>
								<a>Manage Cards</a>
							</li>
							<li>
								<a>Import List</a>
							</li>
						</ul>
					</li>
				<li>
					<a href="#/Decks">Decks</a>
				</li>
				<li>
					<a href="#">Purchase History</a>
				</li>
			</ul>
		</blaze-card-body>

	  <blaze-card-footer>
		<div class="c-input-group">
		  <button class="c-button c-button--block c-button--brand">Github</button>
		  <button class="c-button c-button--block c-button--info">POI</button>
		</div>
	  </blaze-card-footer>

	</blaze-card>
</blaze-drawer>