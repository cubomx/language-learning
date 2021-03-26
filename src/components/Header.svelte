<script>
  import 'firebase/auth';
import Modal from './Modal.svelte';
import SignUp from './SignUp.svelte';

  let isModal = false;

  const handleModal = () => {
    isModal = !isModal;
    console.log(isModal);
    console.log("sali");
  };

  const handleAuth = () => {
    console.log("autentificado");
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
   .Header-content i{
     cursor:pointer;
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
            <i id='login' class="fas fa-user fa-2x" on:click={handleModal}></i>
        </div>
    </div>
</div>