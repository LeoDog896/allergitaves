<script lang="ts">
	import { data } from './searchbar/data_store'
	import Modal from 'svelte-simple-modal';
	import SearchBar from './searchbar/SearchBar.svelte'
</script>

<Modal>
	<SearchBar />
	<div id="margin"></div>
	<main>
		{#each $data as allergin}
			<div class="allergin">
				<h2>
					{#if allergin.more_information}
						<a href={allergin.more_information}>{allergin.name}</a>
					{:else}
						{allergin.name}
					{/if}
				</h2>
				<p>{allergin.types.join(", ")}</p>
				{#if allergin.information}
					<p>{allergin.information}</p>
				{/if}
			</div>
		{/each}
	</main>
</Modal>
<style lang="scss">
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.allergin {
		padding: 10px 20px;
		border-radius: 5px;
		transition: 200ms background-color;
		width: 100%;
		text-align: center;

		h2 {
			color: #666;
			font-weight: 300;
		}

		p {
			color: #888;
			font-weight: 200;
		}
	}

	.allergin:hover {
		background-color: #f5f5f5;
	}
</style>