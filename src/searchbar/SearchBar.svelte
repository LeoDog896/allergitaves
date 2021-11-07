<script>
	import { searchQuery } from './data_store'
	import { getContext } from 'svelte';
	import AddPrompt from '../add/AddPrompt.svelte'

	const { open } = getContext('simple-modal');

	const showDialogue = () => {
		open(AddPrompt);
	};
</script>
<div id="searchbar">
	<input bind:value={$searchQuery} placeholder="Search for an ingredient..."/>
	<button on:click={showDialogue}>+</button>
</div>
<style lang="scss">

	#searchbar {
		display: flex;
	}
	input {
		width: 90%;
	}

	button {
		width: 10%;
	}
</style>