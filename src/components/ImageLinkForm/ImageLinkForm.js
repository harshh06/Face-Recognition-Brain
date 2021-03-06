import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 center">
        {`This magic brain will detect faces in your photos. Give it a try !`}
      </p>
      <div className="center">
        <div className="form center p4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect Face
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
