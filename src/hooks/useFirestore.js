import React, { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export default function useFirestore(collection, filter) {
  //storing all the documents in here
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = filter
      ? projectFirestore
        .collection(collection)
        .where("tags", "array-contains", filter)
        .get()
        .then((querySnapshot) => {
          let documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);

        })
      : projectFirestore
        .collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
        });

    // return () => unsub();
  }, [collection, filter]);

  return { docs };
}

export async function deleteCollectionById(id) {
  const res = await projectFirestore.collection("images").doc(id).delete();
}
