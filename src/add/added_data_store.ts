import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { Allergin } from '../data/allergins'

export const userData: Writable<Allergin[]> = writable([])