import { useState, useEffect } from "react";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(data.file.name);
    const tags = data.tags;

    //to interact with the database
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(data.file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt, tags });
        setUrl(url);
      }
    );
  }, [data.file]);

  return { progress, url, error };
};

export default useStorage;
