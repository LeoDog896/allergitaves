<script>
	import { searchQuery } from './data_store'
</script>
<div id="searchbar">
	<input bind:value={$searchQuery} placeholder="Search for an ingredient..."/>
	<button>+</button>
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