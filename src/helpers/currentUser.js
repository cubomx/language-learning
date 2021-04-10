import { Auth } from '../config/firebase.js';

    const getUser =  () => {
        if (Auth.currentUser != null){
            var uId = Auth.currentUser.uid;
            return uId;
        }
        else{
            return null;
        }
    }

export { getUser};