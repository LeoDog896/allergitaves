<script>
	import { searchQuery } from './data_store'
</script>
<div id="searchbar">
	<input bind:value={$searchQuery} placeholder="Search for an ingredient..."/>
</div>
<style lang="scss">
	input {
		text-align: center;
		width: 100%;
	}
</style>