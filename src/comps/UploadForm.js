import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [tag, setTag] = useState("");
  const [data, setData] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select a valid image format");
    }
  };

  const tagHandler = (e) => {
    setTag(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (file && tag) {
      setData({ file: file, tags: tag.split(" ") });
    }
  };

  return (
    <div className="border-[#86BBD8] border-b-4 pb-14">
      <form onSubmit={handleOnSubmit} className="">
        <div className="flex-col justify-center ">
          <div className="flex justify-center">
            <input type="file" id="imageInput" onChange={changeHandler} hidden />
            <label for="imageInput" className="image-button bg-[url('../src/stylesheets/upload-icon.svg')] h-6 w-6 md:h-8 md:w-8 cursor-pointer">

            </label>
          </div>
          <div className="m-auto flex justify-center">
            <input
              type="input"
              placeholder="Enter tags"
              onChange={tagHandler}
              required
              value={tag}
              className="border-b-4 border-nyaza mt-4 mb-4 md:w-3/5 focus:ring-0 bg-charcoal"
            />
          </div>
        </div>

        <div className="">
          {error && <div className="error">{error} </div>}
          {file && <div>{file.name}</div>}
          {data && file && tag && (
            <ProgressBar
              setFile={setFile}
              data={data}
              setTag={setTag}
              setData={setData}
            />
          )}
        </div>
        <div className="m-auto flex justify-center">
          <button className="border-4 border-nyaza p-4 text-nyaza hover:border-dark_sky_blue">Upload</button>
        </div>
      </form>
    </div>
  );
}
