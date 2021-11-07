import type { Allergin } from '../data/allergins';
import type { Readable } from 'svelte/store';
import { writable, derived } from 'svelte/store';
import { allergins } from '../data/allergins';
import Fuse from 'fuse.js';

const fuse = new Fuse(allergins, {
	keys: ['name', 'types'],
});

export const searchQuery = writable('');
export const data: Readable<Allergin[]> = derived(searchQuery, $query => {
	if ($query.length === 0) return allergins;
	return fuse.search($query).map(item => item.item);
});