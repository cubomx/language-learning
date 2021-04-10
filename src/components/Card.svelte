<script>
    import {data} from '../stores/store.js';
    import { getUser } from '../helpers/currentUser.js';
    import Modal from './Modal.svelte';
    import MessageBox from './MessageBox.svelte';
    import PopUp from './PopUp.svelte';
    import Firebase from 'firebase';

    import { languageCode } from '../stores/store.js';
    import { Firestore } from '../config/firebase.js';

    let bookmark = false;
    let toShow = false;
    let isPopUp = false;
    let msg = "";

    const handleShow = () => {
      bookmark =  !bookmark; 
      setTimeout( () => {
        toShow = !toShow;
      }, 500)
    }

    const addWord = () => {
      const uId = getUser();
      if (uId != null){
        const ref = Firestore.collection(uId).doc($languageCode);
            console.log("add word");
            ref.get()
            .then( (doc) => {
              if (doc.exists){
                isPopUp = true;
                msg = "Word added";
                setTimeout( () => isPopUp = false, 5000);
                doc.ref.update({
                  words: Firebase.firestore.FieldValue.arrayUnion($data.word)
                });
              }
              else{
                alert("Language not initialzied");
              }
            })
          }
        else{
          handleShow();
        }
      }
      
</script>

<style>
    .Card {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      width: 50%;
      padding: 10px;
    }

    @media only screen and (max-width: 1400px){
        .Card{
            width: 90%;
        }
    }
    .Card-word{
        display: flex;
        justify-content: space-between;
        padding: 0 0 5px 5px;
        font-weight: bold;
        font-size: 2em;
        border-bottom:  solid rgba(219, 219, 219, 1);
    }
    .Card-meaning{
        padding: 1em;
        font-style: italic;
    }
    .Card-meaning-definition{
        padding-left: 1em;
        font-style: normal;
        text-align: justify;
        margin-bottom: 0.1em;
    }
    .Card-meaning-example{
        padding-left: 1em;
        font-style: italic;
        text-align: justify;
    }
    .active-bookmark {
      color: rgb(0,191,255);
      animation: bounce linear 0.8s;
      animation-iteration-count: 1;
      transform-origin: 20% 20%;
    }

    @keyframes bounce {
      0% {
        transform: translate(0px, 0px);
      }
      15% {
        transform: translate(0px, -25px);
      }
      30% {
        transform: translate(0px, 0px);
      }
      45% {
        transform: translate(0px, -15px);
      }
      60% {
        transform: translate(0px, 0px);
      }
      75% {
        transform: translate(0px, -5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
</style>

{#if $data != undefined}
<div class="Card">
      <PopUp toShow={isPopUp} {msg}/>
    {#if toShow}
    <Modal>
      <MessageBox msg="Not signed" on:click={handleShow}
      description="If you want to add a word you need to first Login" />
    </Modal>
    {/if}
    <div class="Card-container">
        <div class="Card-word">{$data.word}
            <i class:active-bookmark={bookmark} 
            on:click={ () => addWord()}
            class="fas fa-bookmark">

            </i>
        </div>
        {#each $data.meanings as meaning}
        <div class="Card-meaning">
            {meaning.partOfSpeech}
            {#each meaning.definitions as definition, index}
            <div class="Card-meaning-definition">
                {index + 1.}. {definition.definition}
                
            </div>
            {#if definition.example}
            <div class="Card-meaning-example">
                {'"' + definition.example + '"'}
            </div>
            {/if}
            {/each}
        </div>
        {/each}
    </div>
</div>
{/if}