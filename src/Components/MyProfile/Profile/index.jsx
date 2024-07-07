import React from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/bgimg.png";
import Logo from "../../../assets/profile/profileimg.png";
import Button from '../../Button'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate= useNavigate();
  const editProfile = () =>{
    navigate("/EditProfile")
  }
  const openCreateSession = () =>{
    navigate("/createSession")
  }
  return (
    <ProfileHold>
      <div className="bgImg">
        <img src={BG} alt="background" />
      </div>
      <div className="logo">
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>Rahul Wagh</h2>
          <p>Talent Management Sessions</p>
          <strong>Human Rights | Women Empowerment</strong>
        </div>
      </div>
     <div className="btn">
     <Button width = "208px" onClick={editProfile}>Edit Profile </Button>
     <Button width = "208px" type="outline" onClick={openCreateSession}>Create Sessions </Button>
     <Button width = "208px" type="outline">Manage Calendar </Button>
     </div>
    </ProfileHold>
  );
};

export default Profile;
