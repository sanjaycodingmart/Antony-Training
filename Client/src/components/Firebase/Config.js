import app from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  class Firebase {
    constructor() {
      const firebaseConfig = {
        apiKey: "AIzaSyCzYCaJVt7qM3t_sRg-le5gNwv0_uo_h5w",
        authDomain: "play-music-22.firebaseapp.com",
        databaseURL: "https://play-music-22.firebaseio.com",
        projectId: "play-music-22",
        storageBucket: "play-music-22.appspot.com",
        messagingSenderId: "676295100869",
        appId: "1:676295100869:web:2909014e587c2d1e72a3ac"
    };
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
  
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }

export default Firebase;