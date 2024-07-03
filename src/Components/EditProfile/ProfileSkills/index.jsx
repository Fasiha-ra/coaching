import React from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { SkillWrap } from "./skill.styles";
import { FaGreaterThan } from "react-icons/fa6";
const ProfileSkills = () => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };
  return (
    <SkillWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add Skills</h4>
      </div>
      <p>
      Show your top skills — add up to 5 skills you want to be known for.
      </p>
      <TextField
          hasicon={<FaGreaterThan />}
          parentClass="inputHolder"
          className="input-field"
          field_Name="training"
          type="text"
          placeholder="Skills : ( ex : Management )  "
          name="training"
          // value={formData.firstName}
          // onChange={handleInputChange}
          bgClr="transparent"
        />
        <div className="managementWrap">
          <div className="flex">
          <span>Management</span>
          <span>Management</span>
          <span>Management</span>
          </div>
        </div>
      <Button width="177px">Save</Button>
    </SkillWrap>
  );
};

export default ProfileSkills;
