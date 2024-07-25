import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //uid we can get in login by user.id but we can use a state changed method to detect when it gets logged out or logi in. We can use in constructor 

  private uid?: string;
  hide: boolean = false;
  getHide() {
    return this.hide;
  }
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        this.uid = user.uid;
        console.log("User Logged in uid: ", this.uid);
        // ...
      } else {
        // User is signed out
        // ...
        this.uid = undefined;
        console.log("User logged out uid: ", this.uid);
      }
    });
  }

  getUid() {
    return this.uid;
  }

  isAuthenticated(){
    return this.uid? true : false;
  }
  registerUser(email: string, password: string) {
    this.hide = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.hide = false;
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Sign in succsfull");
        this.router.navigate(['/']);
        // ...
      })
      .catch((error) => {
        this.hide = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage.match("use")) {
          alert("Email is already in use")
        } else {
          alert("Something went wrong in registeration");
        }
      });
  }


  loginUser(email: string, password: string) {

    this.hide = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        this.hide = false;
        const user = userCredential.user;
        console.log(user.uid);
        alert("Login in succsfull")

        // ...
      })
      .catch((error) => {
        this.hide = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorMessage);
        alert("Something went wrong in Login");
      });
  }

  resetPassword(email: string) {
    this.hide = true;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        this.hide = false;
        alert("Reset link was sent check inbox");
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 3000);
      })
      .catch((error) => {
        this.hide = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("something went wrong")
        // ..
      });
  }


  logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Logged Out");
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    }).catch((error) => {
      // An error happened.
      alert("Something went wrong")
    });
  }

}
