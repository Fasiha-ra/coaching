import React from 'react'
import { SessionWrapper } from './Session.styles'
import RightSideBar from '../rightSideBar'
import SessionSearchbar from './SessionSearchbar'
import SessionCard from './SessionCard'

const Session = () => {
  return (
    <SessionWrapper>
        <div className="sessions">
            <div className="searchbar">
                <SessionSearchbar/>
            </div>
            <div className="card">
                <SessionCard/>
            </div>
        </div>
        <div className="rightSideBar">
            <RightSideBar/>
        </div>
    </SessionWrapper>
  )
}

export default Session