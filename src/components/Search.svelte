<script>
    import Card from './Card.svelte';
    import { data, isWord } from '../stores/store.js';
    //export let value = 'seek';
    const lang = 'en_US';
    export let word = '';
    
    const handleSearch = async () => {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
            const info = await response.json();
            if (response.ok){
                console.log(info);
                data.set(info[0]);
                isWord.set(true);
            }
            else if (response.status === 404){
                console.log(info.title);
                isWord.set(false);
                data.set([]);
            }
    }

</script>

<style>
    .Search{
        display: flex;
        padding-top: 5rem;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .Search-container{
        margin-bottom: 20px;
    }
</style>

<div class="Search">
    <div class="Search-container">
        <form on:submit|preventDefault={handleSearch}>
            <input bind:value={word}>
            <button type='submit'>{'Search'}</button>
        </form>

    </div>
    {#if $isWord}
    <Card {word} />
    {/if}
</div>