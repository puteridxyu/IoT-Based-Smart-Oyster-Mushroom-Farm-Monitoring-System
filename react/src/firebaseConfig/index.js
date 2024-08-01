import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAHlPAdRnupCdG9pDblTgM2JAGeNQioXpc",
        authDomain: "capstone-project-bdfdb.firebaseapp.com",
        databaseURL: "https://capstone-project-bdfdb-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "capstone-project-bdfdb",
        storageBucket: "capstone-project-bdfdb.appspot.com",
        messagingSenderId: "566015652473",
        appId: "1:566015652473:web:094eba1c6f6f5a842b5aa8",
        measurementId: "G-DTH0XELW4N"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);  
      return getDatabase(app);

}
export default StartFirebase;