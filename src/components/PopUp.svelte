<script> 
    export let msg;
    export let toShow;

    import { fade, fly } from 'svelte/transition';
</script>

<style>
    .PopUp h1{
        font-family: Lato;
    }

    .PopUp {
        padding: 10px;
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        background-color: white;
        color:  #00d459;
        display: flex;
        justify-content: center;
        align-items:center;
        width: auto;
        position: fixed;
        right: 0;
        left: 0;
        top: 20px;
        width: fit-content;
        margin: auto auto auto auto;
  }

  .PopUp i {
      margin-right: 20px;
  }
</style>

{#if toShow}
<div in:fly="{{ y: 200, duration: 1000 }}" out:fade class="PopUp">
    <i class="fas fa-check-circle fa-2x"></i><h1>{msg}</h1>
</div>
{/if}
