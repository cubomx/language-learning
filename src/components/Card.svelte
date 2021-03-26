<script>
    import {data} from '../stores/store.js';
</script>

<style>
    .Card {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      width: 50%;
      padding: 10px;
    }

    @media only screen and (max-width: 1400px){
        .Card{
            width: 90%;
        }
    }
    .Card-word{
        padding: 0 0 5px 5px;
        font-weight: bold;
        font-size: 2em;
        border-bottom:  solid rgba(219, 219, 219, 1);
    }
    .Card-meaning{
        padding: 1em;
        font-style: italic;
    }
    .Card-meaning-definition{
        padding-left: 1em;
        font-style: normal;
        text-align: justify;
        margin-bottom: 0.1em;
    }
    .Card-meaning-example{
        padding-left: 1em;
        font-style: italic;
        text-align: justify;
    }
</style>

{#if $data != undefined}
<div class="Card">
    <div class="Card-container">
        <div class="Card-word">{$data.word}</div>
        {#each $data.meanings as meaning}
        <div class="Card-meaning">
            {meaning.partOfSpeech}
            {#each meaning.definitions as definition, index}
            <div class="Card-meaning-definition">
                {index + 1.}. {definition.definition}
                
            </div>
            {#if definition.example}
            <div class="Card-meaning-example">
                {'"' + definition.example + '"'}
            </div>
            {/if}
            {/each}
        </div>
        {/each}
    </div>
</div>
{/if}