import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let documents =[]
    projectFirestore.collection("images").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        documents.push({...doc.data(), id: doc.id});
    });
    setDocs(documents)
});
    // const unsub = projectFirestore.collection(collection)
    //   .orderBy('createdAt', 'desc')
    //   .onSnapshot(snap => {
    //     let documents = [];
    //     snap.forEach(doc => {
    //       documents.push({...doc.data(), id: doc.id});
    //     });
    //   console.log(documentsts)
    //     setDocs(documents);
    //   });

    // return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}

export default useFirestore;