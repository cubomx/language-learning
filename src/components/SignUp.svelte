<script>

  import { Auth } from '../config/firebase.js';
  let password ='', email='';
  const handleAuth = () => {
    console.log(password);
    console.log("heho")
    Auth.createUserWithEmailAndPassword(email, password)
      .then( () => { 
        console.log("Hello")
      })
      .catch( error => {
        console.log(error)
      })
  }
  
</script>

<style>
  .SignUp {
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
  .SignUp-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .SignUp-head h2 {
    font-size: 16px;
  }
  .SignUp-head i {
    cursor: pointer;
  }
  .SignUp-content span {
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

.SignUp-content span:hover{
  background-color: rgb(192,192,192, 0.6);
}

  .SignUp-content i {
    color: #3b5998;
    margin: 0 0.5em 0 0;
    font-size: 20px;
  }
  .SignUp-input{
    margin: 0.4em 0 0.4em 0;
  }
  
</style>


<div class="SignUp">
  <div class="SignUp-head">
      <h2>Sign Up</h2>
      <i class='fas fa-times-circle' on:click/>
  </div>
  <div class="SignUp-content">
    <input class="SignUp-input" type="text" placeholder="email" bind:value={email}>
    <input class="SignUp-input" type="password" placeholder="password" bind:value={password}>
      <span class="SignUp-submit" on:click={handleAuth}>
          <i class='far fa-check-circle'  />
          Create account
      </span>
    <p class="SignUp-signIn">Already have an account?</p>
  </div>
</div>