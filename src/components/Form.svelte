<script>
  import Error from './Error.svelte';
  import { clickOutside } from '../helpers/clickOutside.js'
  import { Auth, Firestore } from '../config/firebase.js';

  import PopUp from './PopUp.svelte';

  let email = "", password = "", nickname = "";
  let firebaseError = false, msg="";
  let toShow = false;
  export let isCreation;
  export let message;
  export let title; 

  const handleSignUp = () => {
    console.log(nickname);
    console.log("heho")
    Auth.createUserWithEmailAndPassword(email, password)
      .then( () => { 
        console.log("Hello")
      })
      .catch( error => {
         var errorCode = error.code;
        var errorMessage = error.message;
        msg = errorMessage + " " + errorCode;
        firebaseError = true;
        console.log(errorMessage, errorCode);
      })
  }

const handleAuth = () => {
    Auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      firebaseError = false;
       console.log(user.user.uid);
       toShow = true;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        msg = errorMessage + " " + errorCode;
        firebaseError = true;
        console.log(errorMessage, errorCode);
    });
}

  
</script>

<style>
  .Form {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: auto auto auto auto;
    width: 300px;
    height: fit-content;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    padding: 1em;

  }
  .Form-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .Form-head h2 {
    font-size: 16px;
  }
  .Form-head i {
    cursor: pointer;
  }
  .Form-content span {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 5px;
    padding: 0.5em;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 2em 0 0 0;
  }

.Form-content span:hover{
  background-color: rgb(192,192,192, 0.6);
}

  .Form-content i {
    color: #3b5998;
    margin: 0 0.5em 0 0;
    font-size: 20px;
  }
  .Form-input{
    margin: 0.4em 0 0.4em 0;
  }

</style>



<div class="Form" use:clickOutside  on:click_outside>
  <PopUp {toShow} msg={ isCreation ? "Account created" : "Logged in"}/>
  <div class="Form-progress"></div>
  <div class="Form-head">
      <h2>{title}</h2>
      <i class='fas fa-times-circle' on:click/>
  </div>
  <div class="Form-content">
    {#if isCreation}
    <input class="Form-input" type="text" placeholder="nickname" bind:value={nickname}>
    {/if}
    <input class="Form-input" type="text" placeholder="email" bind:value={email}>
    <input class="Form-input" type="password" placeholder="password" bind:value={password}>
      <span class="Form-submit" 
      on:click={ () => { 
        if (isCreation){
          handleSignUp();
        }
        else{
          handleAuth();
        }
      }}>
          <i class='far fa-check-circle'  />
          {message}
      </span>
      {#if firebaseError}
        <Error msg={msg}/>
      {/if}
  </div>
</div>