import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ValidateContext } from "./context";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import ImageFilter from "./ImageFilter";
import Navbar from "./Navbar";

const ParentComponent = () => {
  const [validate, setValidate] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(null);

  return (
    <div className="App bg-charcoal">
      <ValidateContext.Provider value={{ validate, setValidate }}>
        <Router>
          <Routes>
            <Route exact path="/"></Route>
          </Routes>
          <Navbar />
          <Title />
          <UploadForm />
          <ImageFilter setFilter={setFilter} />
          <ImageGrid setSelectedImage={setSelectedImage} filter={filter} />
        </Router>
      </ValidateContext.Provider>
    </div>
  );
};

export default ParentComponent;
