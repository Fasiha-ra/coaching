import React from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { CertificateWrap } from "./certificate.styles";
const Certificate = () => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/EditProfile");
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
        // value={formData.firstName}
        // onChange={handleInputChange}
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
          <button className="bton">+</button>
        </div>
      </div>
      <Button width="177px">Save</Button>
      <button className="bton">+</button>
    </CertificateWrap>
  );
};

export default Certificate;
