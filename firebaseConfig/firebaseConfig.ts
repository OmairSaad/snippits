import { environment } from "../src/environments/environment.development";
//Use environment variable
export const firebaseConfig = {
    apiKey: environment.firebaseAPIKEY,
    authDomain:environment.authDomain,
    projectId: environment.projectId, 
    storageBucket: environment.storageBucket,
    messagingSenderId: environment.messagingSenderId,
    appId: environment.appId
  };