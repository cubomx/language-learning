<script> 
    export let msg;
    export let toShow;
</script>

<style>
    @keyframes fade {
        from { opacity: 0; top: 0px; }
        to { opacity: 1; top: 20px;}
    }

    .PopUp h1{
        font-family: Lato;
    }

    .PopUp {
        padding: 10px;
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        background-color: white;
        color: green;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 300px;
        height: fit-content;
        position: fixed;
        top: 20px;
        animation-name: fade;
        animation-duration: 3s;
  }
</style>

{#if toShow}
<div class="PopUp">
    <h1>{msg}</h1>
</div>
{/if}
