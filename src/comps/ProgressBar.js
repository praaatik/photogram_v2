import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({ setFile, data, setTag, setData }) {
  const { url, progress } = useStorage(data);

  useEffect(() => {
    if (url) {
      // setFile(null);
      setTag("");
      setData(null);
    }
  }, [url]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
}
