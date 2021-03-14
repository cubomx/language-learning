<script>
    import Header from '../components/Header.svelte';
    import Search from '../components/Search.svelte';
    import Main from '../components/Main.svelte';

    import Badge from "svelte-favicon-badge";
import Card from '../components/Card.svelte';
    let count = 0;
    let background = "#FF0000";
    let color = "#FFFFFF";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body){
        background-color: #fafafa;
        color: rgba(38, 38, 38, 0.7);
        font-family: Lato;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3){
        margin: 0;
        padding: 0;
        font-family: "Pacifico", sans-serif;
    }

    :global(button, input){
        font-family: Lato;
        font-size: 1em;
    }
    :global(button:hover){
        color: red;
    }
    

    
</style>

<Badge {count} {color} {background} href="../../public/favicon-32x32.png" />
    <Header /> 


    <Main>
        <Search />
    </Main>
    
