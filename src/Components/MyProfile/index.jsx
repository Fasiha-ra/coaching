import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import RightSideBar from "../rightSideBar";
// import Comment from "../rightSideBar/Comment";
// import Blog from "../rightSideBar/Blog";
// import UpgradeCourse from "../Sidebar/UpgradeCourse";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import {Educationdata, Experiencedata} from '../../Constant/Data'
import Certificate from "./Certificate";
import Footer from "../../Components/Footer"
import UpgradeCourse from "../../Components/rightSideBar/UpgradeCourse";
import TrendingSession from "../rightSideBar/TrendingSession";
import { TrendingSessionData } from "../../Constant/Data";
import Meeting from "../rightSideBar/meeting";
import RequestMeeting from "../rightSideBar/meeting";
const MyProfile = () => {
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile />
        <About/>
        <Analysis/>
        <Skills/>
        <Education data={Experiencedata}/>
        <Education data={Educationdata}/>
        <Certificate />
        <Rating/>
      </div>
      <div className="rightSideBar">
        <RightSideBar>
        <div className="rightsidebarContent">
            <TrendingSession data={TrendingSessionData} title="Upcoming Sessions"/>
          </div>
          <div className="rightsidebarContent">
            <Meeting />
          </div>
          <div className="rightsidebarContent">
            <TrendingSession data={TrendingSessionData} title="Completed Sessions"/>
          </div>
          <div className="rightsidebarContent">
            <RequestMeeting />
          </div>
        <div className="rightsidebarContent">
            <UpgradeCourse />
          </div>
          <div className="rightsidebarContent">
            <Footer />
          </div>
           
          {/*<div className="course">
            <UpgradeCourse />
          </div> */}
        </RightSideBar>
      </div>
    </ProfileWrapper>
  );
};

export default MyProfile;
