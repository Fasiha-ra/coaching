import React from 'react'
import { HomeWrapper } from './Home.styles'
import RightSideBar from '../rightSideBar'
import Profile from '../MyProfile/Profile'
import Analysis from '../MyProfile/Analysis'
import Session from './sessionCard/Session'
import UpcomingSession from './UpcomingSession'
import AnalysisSession from './AnalysisSession'
import CustomRightSidebar from '../rightSideBar/CustomRightSidebar'
import UpgradeCourse from '../rightSideBar/UpgradeCourse'
import Footer from '../Footer'
import RequestMeeting from '../rightSideBar/meeting/RequestMeeting'
import Earning from '../rightSideBar/Earning'
import AddedSession from '../rightSideBar/AddedSession'

const Home = () => {
  return (
    <HomeWrapper>
      <div className="home">
        <Profile/>
        <Analysis/>
        <AnalysisSession/>
        <Session title="All Sessions"/>
        <UpcomingSession/>
        <Session title="Upcoming Group Sessions"/>
      </div>
       <div className="rightSideBar">
        <CustomRightSidebar>
          <div className="earning">
            <Earning/>
          </div>
        <div className="rightsidebarContent">
            <RequestMeeting />
          </div>
          <div className="addedSession">
            <AddedSession/>
          </div>
        <div className="rightsidebarContent">
            <UpgradeCourse />
          </div>
          <div className="rightsidebarContent">
            <Footer />
          </div>
        </CustomRightSidebar>
      </div>
    </HomeWrapper>
  )
}

export default Home