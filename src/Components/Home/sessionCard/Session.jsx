import React from "react";
import { SessionWrapper } from "./Session.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { employeeSession } from "../../../Constant/Data";
import { BsPencil } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Session = ({title}) => {
  return (
    <SessionWrapper>
      <div className="wrapper">
        <div className="flex">
          <h4>{title}</h4>
          <Link to="/session">
            <span className="h4">
              View All
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
        <div className="cardWrap">
          <div className="cardHold">
            {employeeSession.map((val, ind) => (
              <div className="card sessonCard" key={ind}>
                <figure>
                  <img src={val.img} alt="sessionss" />
                </figure>
                <div className="iconBtn">
                  <Link href="/">
                    <BsPencil />
                  </Link>
                  <Link href="/">
                    <FaRegEye />
                  </Link>
                </div>
                <div className="text">
                  <h4>{val.title}</h4>
                  <div className="timeWrap">
                    <div className="flexx">
                      <img src={calendar} alt="calendar" />
                      <span>{val.date}</span>
                    </div>
                    <div className="flexx">
                      <img src={time} alt="calendar" />
                      <span>{val.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SessionWrapper>
  );
};

export default Session;
