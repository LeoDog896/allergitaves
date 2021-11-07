import type { Allergin } from '../data/allergins';
import type { Readable } from 'svelte/store';
import { writable, derived } from 'svelte/store';
import { allergins } from '../data/allergins';
import { userData } from '../add/added_data_store'
import Fuse from 'fuse.js';

const fuseOptions: Fuse.IFuseOptions<Allergin> = {
	keys: ['name', 'types']
}

const fuse = derived(userData, $modifiedUserData => new Fuse([...allergins, ...$modifiedUserData], fuseOptions));

export const searchQuery = writable(decodeURI(window.location.hash).substr(1));

searchQuery.subscribe(value => {
	window.location.hash = value;
})

export const data: Readable<Allergin[]> = derived([searchQuery, fuse, userData], ([$query, $fuse, $userData]) => {
	if ($query.length === 0) return [...allergins, ...$userData];
	return $fuse.search($query).map(item => item.item);
});