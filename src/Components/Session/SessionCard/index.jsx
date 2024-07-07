import React from "react";
import { SessionCardWrap } from "./SessionCard.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { SessionCardData } from "../../../Constant/Data";
import { BsPencil } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../Button/index";
const SessionCard = ({ clickHandle }) => {
  return (
    <SessionCardWrap>
      <div className="cardWrap">
        {SessionCardData.map((val, ind) => (
          <div className="wrapper" key={ind}>
            <div className="cardHold">
              <figure>
                <img src={val.img} alt="sessionss" />
              </figure>
              <blockquote>
                <q>{val.title}</q>
                <div className="timeWrap">
                  <cite>
                    <img src={calendar} alt="calendar" />
                    <span>{val.date}</span>
                  </cite>
                  <cite>
                    <img src={time} alt="calendar" />
                    <span>{val.time}</span>
                  </cite>
                </div>
              </blockquote>
              <div className="iconBtn">
                <Link href="/">
                  <BsPencil />
                </Link>
                <Link href="/" onClick={clickHandle}>
                  <FaRegEye />
                </Link>
              </div>
            </div>
            <div className="btn">
              <Button width="128px">Join</Button>
            </div>
          </div>
        ))}
      </div>
    </SessionCardWrap>
  );
};

export default SessionCard;
