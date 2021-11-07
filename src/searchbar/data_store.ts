import type { Allergin } from '../data/allergins';
import type { Readable } from 'svelte/store';
import { writable, derived } from 'svelte/store';
import { allergins } from '../data/allergins';

export const searchQuery = writable('');
export const data: Readable<Allergin[]> = derived(searchQuery, $query => {
	const query = $query.toLowerCase();
	return allergins.filter(allergin => allergin.name.toLowerCase().includes(query));
});