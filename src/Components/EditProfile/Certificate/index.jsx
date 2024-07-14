import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { CertificateWrap } from "./certificate.styles";

const Certificate = () => {
  const navigate = useNavigate();
  const [certificateImage, setCertificateImage] = useState(null); // State to store the selected image file

  const backToProfile = () => {
    navigate("/EditProfile");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      setCertificateImage(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  return (
    <CertificateWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add certificates </h4>
      </div>
      <p>Add your certificate details</p>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="Title"
        name="title"
        bgClr="transparent"
      />
      <TextField
        variant="textarea"
        label="Description"
        parentClass="textareaHolder"
      />
      <div className="img">
        <span>Image</span>
        <div className="imgWrap">
          {certificateImage ? (
            <img
              src={URL.createObjectURL(certificateImage)}
              alt="Certificate"
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
          ) : (
            <button className="bton">+</button>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <Button width="177px">Save</Button>
    </CertificateWrap>
  );
};

export default Certificate;
