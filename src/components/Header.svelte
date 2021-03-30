<script>
  import 'firebase/auth';

  import Menu from './Menu.svelte';

  export let segment; // know the route

</script>

<style>
    a{
      text-decoration: none;
      color: inherit;
    }
    .Header {
      background-color: white;
      position: fixed;
      width: 100%;
    }
    .Header-container {
      grid-template-columns: minmax(auto, 936px);
      display: grid;
      justify-content: center;
      background-color: white;
      border-bottom: 1px solid rgba(38, 38, 38, 0.4);
    }

    .Header-content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
   
</style>


<div class="Header">
    <div class="Header-container">
        <div class="Header-content"> 
          <a aria-current={segment} href="/">
            <h1>Learning</h1>
          </a>
          <Menu {segment}/>    
        </div>
    </div>
</div>