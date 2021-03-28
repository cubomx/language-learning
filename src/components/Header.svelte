<script>
  import 'firebase/auth';
  import Modal from './Modal.svelte';
  import SignUp from './SignUp.svelte';

  export let segment; // know the route
  let isModal = false;
  let isMenu = false;

  const handleModal = () => {
    isModal = !isModal;
    console.log(isModal);
    console.log("sali");
  };

  const handleMenu = ()=> {
    isMenu = !isMenu;
  }
</script>

<style>
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
   .Header-content i{
     cursor:pointer;
     padding: 10px;
     border-radius: 5px;
     
   }

   .Header-content i:hover{
     color: rgb(0,191,255);
     background-color: rgba(100,100, 100, 0.3);
   }

  .Header-menu{
    position:relative;
  }

  .Header-menu-words{
    font-weight: bold;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  .Header-menu-content{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 10px;
    width: 100px;
    right: 0%;

    border: 1px solid rgba(219, 219, 219, 1);
    background-color: white;
    padding: 15px;
    border-radius: 5px;
  }

  span {
    font-size: 16px;
    font-family: Lato;
    font-weight: bold;
    margin-left: 5px;
  }

  
   
</style>


<div class="Header">
  {#if isModal}
    <Modal>
      <SignUp on:click={handleModal} />
    </Modal>
  {/if}
    <div class="Header-container">
        <div class="Header-content"> 
            <h1>Learning</h1>
                <div class="Header-menu">
                  <i class="fas fa-bars fa-2x " on:click={handleMenu}></i>
                  {#if isMenu}
                  <div class="Header-menu-content">
                    <i class="fas fa-sign-in-alt fa-2x"><span>Login</span></i>
                    <i class="fas fa-user fa-2x" on:click={handleModal}>
                      <span>Sign Up</span>
                    </i>
                    <a aria-current={segment} href='words'>
                      <i class="fab fa-leanpub fa-2x Header-menu-words">
                        <span>Words</span> 
                      </i> 
                    </a>
                    </div>
                  {/if}
                </div>
        </div>
    </div>
</div>