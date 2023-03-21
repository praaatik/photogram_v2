import React from "react";

export default function ImageFilter({ setFilter }) {
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="m-auto flex justify-center">
      <input
        type="text"
        placeholder="Enter filter"
        onChange={handleOnChange}
        // className="input-filter"
        className="border-b-4 border-nyaza mt-10 mb-10 md:w-3/5 focus:ring-0 bg-charcoal"
        style={{ fontSize: "1rem" }}
      />
    </div>
  );
}
