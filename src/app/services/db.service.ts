import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebaseConfig/firebaseConfig';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { sn } from '../Models/snippit';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: any;
  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    this.db = getFirestore(app);
  }

  async create(snippit:sn) {
    try {
      const docRef = await addDoc(collection(this.db, "snippites"),snippit);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
