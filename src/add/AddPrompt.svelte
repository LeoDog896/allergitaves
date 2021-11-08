<script lang="ts">
	import { AllerginType } from '../data/allergin_type'
	import { userData } from './added_data_store'
	import Select from 'svelte-select';
	import { getContext } from 'svelte' 

	const { close } = getContext('simple-modal');

	let name = ""
	let information = ""
	let moreInformation = ""
	let items = []

	function finishAdd() {
		if (name.length === 0) return;
		if (items.length === 0) return;
		$userData = [...$userData, {
			name: name,
			information: information,
			more_information: moreInformation,
			types: items.map(item => item.value),
			user_created: true
		}]
		close()
	}
</script>
<div id="prompt">
	<input bind:value={name} placeholder="Name"/>
	<br/>
	<Select bind:value={items} items={Object.values(AllerginType)} isMulti={true}></Select>
	<br/>
	<input bind:value={information} placeholder="Information (Optional)"/>
	<br/>
	<input bind:value={moreInformation} placeholder="More Information (Optional)"/>
	<br/>
	<button on:click={finishAdd}>Done</button>
</div>