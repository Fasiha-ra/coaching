import React, { useState } from "react";
import BG from "../../../assets/profile/editBG.png";
import Logo from "../../../assets/profile/editLOGO.png";
import { EditProfileWrap } from "./editProfile.styles";
import back from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import { FaGreaterThan } from "react-icons/fa6";

const EditProfile = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(BG);
  const [logoImage, setLogoImage] = useState(Logo);
  const [primaryTopics, setPrimaryTopics] = useState([]);
  const [secondaryTopics, setSecondaryTopics] = useState([]);
  const [primaryTopicInput, setPrimaryTopicInput] = useState("");
  const [secondaryTopicInput, setSecondaryTopicInput] = useState("");

  const backToProfile = () => {
    navigate("/profile");
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  const handleAddPrimaryTopic = () => {
    if (primaryTopicInput.trim() !== "") {
      setPrimaryTopics([...primaryTopics, primaryTopicInput.trim()]);
      setPrimaryTopicInput("");
    }
  };

  const handleAddSecondaryTopic = () => {
    if (secondaryTopicInput.trim() !== "") {
      setSecondaryTopics([...secondaryTopics, secondaryTopicInput.trim()]);
      setSecondaryTopicInput("");
    }
  };

  const handleKeyPress = (e, addTopic) => {
    if (e.key === "Enter") {
      addTopic();
    }
  };

  return (
    <EditProfileWrap>
      <div className="flex">
        <div className="backimg" onClick={backToProfile}>
          <img src={back} alt="back" />
        </div>
        <div className="wrap">
          <div className="bgImg" onClick={() => document.getElementById('bgInput').click()}>
            <img src={backgroundImage} alt="background" />
            <input
              type="file"
              id="bgInput"
              style={{ display: 'none' }}
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => handleImageChange(e, setBackgroundImage)}
            />
          </div>
          <div className="logo" onClick={() => document.getElementById('logoInput').click()}>
            <figure>
              <img src={logoImage} alt="logo" />
              <input
                type="file"
                id="logoInput"
                style={{ display: 'none' }}
                accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => handleImageChange(e, setLogoImage)}
              />
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
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="lastName"
            type="text"
            label="Last Name"
            name="lastName"
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
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="number"
            type="number"
            label="Contact Number"
            name="number"
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
            bgClr="transparent"
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="city"
            type="text"
            label="City"
            name="city"
            bgClr="transparent"
          />
        </div>
        <h4 className="heading">Add Primary Training Topic</h4>
        <div className="addTopic">
          <TextField
            hasicon={<FaGreaterThan />}
            parentClass="inputHolder"
            className="input-field"
            field_Name="primaryTraining"
            type="text"
            placeholder="Training Topics : ( ex : Management ) "
            name="primaryTraining"
            bgClr="transparent"
            value={primaryTopicInput}
            onChange={(e) => setPrimaryTopicInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddPrimaryTopic)}
          />
        </div>
        <div className="managementWrap">
          <div className="flex">
            {primaryTopics.map((topic, index) => (
              <span key={index}>{topic}</span>
            ))}
          </div>
        </div>
        <h4 className="heading">Add Secondary Training Topic</h4>
        <div className="addTopic">
          <TextField
            hasicon={<FaGreaterThan />}
            parentClass="inputHolder"
            className="input-field"
            field_Name="secondaryTraining"
            type="text"
            placeholder="Training Topics : ( ex : Management ) "
            name="secondaryTraining"
            bgClr="transparent"
            value={secondaryTopicInput}
            onChange={(e) => setSecondaryTopicInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddSecondaryTopic)}
          />
        </div>
        <div className="managementWrap">
          <div className="flex">
            {secondaryTopics.map((topic, index) => (
              <span key={index}>{topic}</span>
            ))}
          </div>
          <button>+</button>
        </div>
      </div>
    </EditProfileWrap>
  );
};

export default EditProfile;
