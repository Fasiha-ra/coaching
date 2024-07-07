import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import CustomSideBar from "../Sidebar/CustomeSideBar";
import Button from "../Button";
import SearchBar from "../TextField/SearchBar";
import DatePicker from "react-datepicker";
import LectureSchedule from "../LectureSchedule";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [lecture, setLecture] = useState(false);
  const BackToPage = () => {
    setLecture(false);
  };
  const Lecturehandle = () => {
    setLecture(true);
  };
 
  return (
    <>
      <CalendarWrap>
       
        {!lecture ? (
          <div className="calenderHolder">
            <h4>
              Tuesday, November 30 2024 <FaAngleLeft />
              <FaAngleRight />
            </h4>
            <CalendarHeader />
            <TimeSlots click={Lecturehandle} />
          </div>
        ) : (
          <LectureSchedule BackToPage={BackToPage} />
        )}
      </CalendarWrap>
    </>
  );
};

export default Calendar;
