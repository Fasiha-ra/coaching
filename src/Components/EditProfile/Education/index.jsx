import React from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { EducationWrap } from "./education.styles";
const Education = () => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };
  return (
    <EducationWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add education details</h4>
      </div>
      <p>
      Add your education details
      </p>
      <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="school"
            type="text"
            label="School / University"
            name="school"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="degree"
            type="text"
            label="Degree"
            name="degree"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="specialization"
            type="text"
            label="Specialization"
            name="specialization"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <div className="flex">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="StartDate"
            type="text"
            label="Start Date"
            name="StartDate"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="EndDate"
            type="text"
            label="End Date"
            name="EndDate"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          </div>
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="Grade"
            type="text"
            label="Grade"
            name="Grade"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="cityDescription"
            type="text"
            label="Description"
            name="Description"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
      
      <Button width="177px">Save</Button>
      <button className="bton">+</button>
     
    </EducationWrap>
  );
};

export default Education;
