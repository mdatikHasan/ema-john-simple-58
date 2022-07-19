import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;

/* 
Step-1: Initial Setup
1. firebase: create Project
2.create web app
3. get configuration 
4. initialize firebase
5. Enable auth method


------------- 

Step-2
1. Create Login Component
2. Create Register Component 
3. Create Route for login and register

--------------
Step-3
1. set up sign in method
2. set up sign out method
3. user state
4. special observer thats mean user auth change update value set in user
*/