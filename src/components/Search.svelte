<script>
    import Card from './Card.svelte';
    import { data, isWord, languageCode} from '../stores/store.js';
    
    const langs = [ {langCode: "fr", langName: "French"},
     { langCode: "en_US", langName: "English (US)"},
    {langCode: "es", langName: "Spanish"},
    {langCode:"ja", langName:"Japanese"},
    {langCode:"ru", langName:"Russian"},
    {langCode:"en_GB", langName:"English (UK)"},
    {langCode:"de", langName:"German"},
    {langCode:"it", langName:"Italian"},
    {langCode:"ko", langName:"Korean"},
    {langCode:"pt-BR", langName:"Brazilian Portuguese"},
    {langCode:"ar", langName:"Arabic"},
    {langCode:"tr", langName:"Turkish"}
]

    export let word = '';
    
    const handleSearch = async () => {
            console.log($languageCode);
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${$languageCode}/${word}`);
            const info = await response.json();
            if (response.ok){
                console.log(info);
                data.set(info[0]);
                isWord.set(true);
            }
            else if (response.status === 404){
                alert(info.title);
                console.log(info);
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

    .Search-select{
        padding: 5px;
        border-radius: 3px;
        margin-bottom: 10px ;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .Search-container{
        margin-bottom: 10px;
    }

    .btn_submit{
        margin-left: 10px;
    }

    
</style>

<div class="Search">
    <select class="Search-select" bind:value={$languageCode}>
        {#each langs as lang}
            <option value={lang.langCode}>{lang.langName}</option>
        {/each}

    </select>
    <div class="Search-container">
        <form on:submit|preventDefault={handleSearch}>
            <input bind:value={word}>
            <button class="btn_submit" type='submit'>{'Search'}</button>
        </form>

    </div>
    {#if $isWord}
    <Card {word} />
    {/if}
</div>