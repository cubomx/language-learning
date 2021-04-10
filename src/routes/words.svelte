<script>
    import Main from '../components/Main.svelte';
    
    import  { getUser } from '../helpers/currentUser.js';
    
</script>

<style>
    .words{
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<Main>
    <div class="words">
        <button  on:click={ () => {
            getUser();
        } } >Get user</button>
        <h1>Words</h1>
        <h1>Words</h1>
        <h1>Words</h1>
        <h1>Words</h1>
    </div>
    
</Main>