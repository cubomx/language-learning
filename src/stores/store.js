import { writable } from 'svelte/store';

export const data = writable([ ]);

export const languageCode = writable("en_US");

export const isWord = writable(false);