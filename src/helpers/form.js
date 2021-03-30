import { Auth } from '../config/firebase.js';
import { email, password, nickname} from '../stores/user.js';

let Email, Password, Nickname;

const unsubscribeEmail = email.subscribe(value => {
  Email = value;
});

const unsubscribePassword = password.subscribe(value => {
  Password = value;
});

const unsubscribeNickname = nickname.subscribe(value => {
  Nickname = value;
});





  export {handleAuth, handleSignUp};