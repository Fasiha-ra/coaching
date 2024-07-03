import React from "react";
import BG from "../../../assets/profile/bgimg.png";
import Logo from "../../../assets/profile/profileimg.png";
import { EditProfileWrap } from "./editProfile.styles";
import back from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import { FaGreaterThan } from "react-icons/fa6";
import Button from '../../Button'
const EditProfile = () => {
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };
  return (
    <EditProfileWrap>
      <div className="flex">
        <div className="backimg" onClick={backToProfile}>
          <img src={back} alt="back" />
        </div>
        <div className="wrap">
          <div className="bgImg">
            <img src={BG} alt="background" />
          </div>
          <div className="logo">
            <figure>
              <img src={Logo} alt="logo" />
            </figure>
          </div>
        </div>
      </div>
      <div className="info">
        <h4 className="heading">Profile Info</h4>
        <div className="grid">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="firstName"
            type="text"
            label="First Name"
            name="firstName"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="lastName"
            type="text"
            label="Last Name"
            name="lastName"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
        </div>
        <div className="grid">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="email"
            type="email"
            label="Email id"
            name="email"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="number"
            type="number"
            label="Contact Number"
            name="number"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
        </div>
        <div className="grid">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="Country"
            type="text"
            label="Country / Region"
            name="Country"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="city"
            type="text"
            label="City"
            name="city"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
        </div>
        <h4 className="heading">Add Primary Training Topic</h4>
        <TextField
          hasicon={<FaGreaterThan />}
          parentClass="inputHolder"
          className="input-field"
          field_Name="training"
          type="text"
          placeholder="Training Topics : ( ex : Management ) "
          name="training"
          // value={formData.firstName}
          // onChange={handleInputChange}
          bgClr="transparent"
        />
        <div className="managementWrap">
          <div className="flex">
          <span>Management</span>
          </div>
        </div>
        <h4 className="heading">Add Secondary Training Topic</h4>
        <TextField
          hasicon={<FaGreaterThan />}
          parentClass="inputHolder"
          className="input-field"
          field_Name="training"
          type="text"
          placeholder="Training Topics : ( ex : Management ) "
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
          <button>+</button>
        </div>
      </div>
    </EditProfileWrap>
  );
};

export default EditProfile;
