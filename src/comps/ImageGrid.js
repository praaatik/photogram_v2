import React from "react";
import useFirestore, { deleteCollectionById } from "../hooks/useFirestore";

export default function ImageGrid({ setSelectedImage, filter }) {
  const { docs } = useFirestore("images", filter);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-charcoal">
      {docs &&
        docs.map((doc) => {
          return (
            <div className="max-h-full border-2 border-nyaza m-2 rounded-md hover:border-granny_smith_apple relative">
              <div
                className="cursor-pointer"
                key={doc.id}
                onClick={() => setSelectedImage(doc.url)}
              >
                <img
                  src={doc.url}
                  alt={docs.tags}
                  className=""
                  onDoubleClick={() => {
                    window.open(doc.url, "_blank", "noopener,noreferrer");
                  }}
                />

                <div
                  onClick={() => {
                    deleteCollectionById(doc.id);
                  }}
                  className="bg-[url('../src/stylesheets/delete-icon.svg')] h-6 w-6 bg-no-repeat absolute bottom-0 right-0"
                ></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
