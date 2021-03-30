<script> 

    import Modal from './Modal.svelte';
    import Form from './Form.svelte';

    import { clickOutside } from '../helpers/clickOutside.js'
    import { isMenu } from '../stores/store.js';

    export let segment;

    let isSignUp = false;
    let isLogin = false;

  const handleMenu = () => {
    isMenu.update( n => n = !n);
  }

  const handleModal = () => {
    isSignUp = !isSignUp;
    if (isSignUp){
      handleMenu();
    }
  };

  const handleLogin = () => {
      isLogin = !isLogin;
      if (isLogin){
          handleMenu();
      }
  }

    const closeMenu = () => {
    isMenu.set(false);
  }
</script>

<style>
    i{
     cursor:pointer;
     padding: 10px;
     border-radius: 5px;
     
   }

   i:hover{
     color: rgb(0,191,255);
     background-color: rgba(100,100, 100, 0.3);
   }

  .Menu{
    position:relative;
  }

  .Menu-words{
    font-weight: bold;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  .Menu-content{
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

<div class="Menu" use:clickOutside on:click_outside={closeMenu}>
    {#if isSignUp}
    <Modal>
      <Form on:click_outside={handleModal} on:click={handleModal}
        title="Sign Up" message="Create account" isCreation={true}
      />
    </Modal>
  {/if}
  {#if isLogin}
  <Modal>
    <Form on:click_outside={handleLogin} on:click={handleLogin} 
      title="Login" message="Start session" isCreation={false}
    />
  </Modal>
  {/if}
    <i class="fas fa-bars fa-2x " on:click={handleMenu}></i>
    {#if $isMenu}
    <div class="Menu-content">
      <i class="fas fa-sign-in-alt fa-2x" on:click={handleLogin}><span>Login</span></i>
      <i class="fas fa-user fa-2x" on:click={handleModal}>
        <span>Sign Up</span>
      </i>
      <a aria-current={segment} href='words' on:click={handleMenu}>
        <i class="fab fa-leanpub fa-2x Menu-words">
          <span>Words</span> 
        </i> 
      </a>
      </div>
    {/if}
  </div>