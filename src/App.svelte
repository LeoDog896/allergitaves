<script lang="ts">
	import { allergins } from './data/allergins'
</script>

<main>
	{#each allergins as allergin}
		<div class="allergin">
			<h2>{allergin.name}</h2>
			<p>Contains: {allergin.types.join(", ")}</p>
			{#if allergin.information}
				<p>{allergin.information}</p>
			{/if}
		</div>
	{/each}
</main>