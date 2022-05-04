import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const getBurger = async (itemId) => {
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: itemId,
          ...docSnap.data()
      }
    } else {
      console.log("No such document!");
    }
}

export const getCategory = async (categoryId) => {
  let q;
    if (categoryId) {
        q = query(collection(db, "products"), where('categoryId', '==', categoryId));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}