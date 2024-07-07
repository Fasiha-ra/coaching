import React, { useState } from "react";
import { CreateWrapper } from "./createSession.styles";
import backarrow from "../../../assets/profile/backarrow.png";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import time from "../../../assets/profile/time.png";
import date from "../../../assets/profile/calendar.png";
import Button from "../../Button/index";
import upload from "../../../assets/home/card.png";
import Dropdown from "../../Dropdown";
import { FaPlus } from "react-icons/fa6";

const EditSession = () => {
    const navigate = useNavigate();
    const backToView = () => {
        navigate("/viewsession")
    }
  const [sessionOptions, setSessionOptions] = useState([
    {
      label: "Individual Session",
      value: "Individual Session",
      checked: false,
    },
    { label: "Group Session", value: "Group Session", checked: false },
  ]);
  const [sessionTypeOptions, setSessionTypeOptions] = useState([
    { label: "Talent Management", value: "Talent Management", checked: false },
    { label: "Human Resource", value: "Human Resource", checked: false },
    { label: "Women Empowerment", value: "Women Empowerment", checked: false },
    { label: "Employee Growth", value: "Employee Growth", checked: false },
    { label: "Other", value: "Other", checked: false },
  ]);
  const [sessionRoleOptions, setSessionRoleOptions] = useState([
    { label: "HR", value: "HR", checked: false },
    { label: "Employees", value: "Employees", checked: false },
    { label: "Junior Employees", value: "Junior Employees", checked: false },
    { label: "Managing Staff", value: "Managing Staff", checked: false },
    { label: "Interns", value: "Interns", checked: false },
    { label: "All", value: "All", checked: false },
  ]);

  return (
    <CreateWrapper>
      <div className="createHolder">
        <div className="backimg">
          <button>
            <img src={backarrow} alt="back" onClick={backToView}/>
          </button>
        </div>
        <div className="createSession">
          <h4 className="title">Create Session</h4>
          <span className="subTtile">
            Add following information to create session
          </span>
          <Dropdown
            width="500px"
            label="Session Type"
            options={sessionOptions}
            setOptions={setSessionOptions}
          />
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="title"
            type="text"
            label="Title"
            name="title"
            placeholder="Change Management : Leading Agile Systems Change Management"
            // value={formData.firstName}
            // onChange={handleInputChange}
            bgClr="transparent"
          />
          <TextField
            variant="textarea"
            label="About"
            parentClass="textareaHolder"
            placeholder="Change is now and forever. It is not optional any more than breathing and sleeping and doing it well is a requirement of organization health. Learning to capture the competitive advantage of a changing landscape is an essential skill for leaders.
This course is based on the forty five years of experience helping companies like Merck, Shell Oil, Honeywell, Honda and dozens of others to create cultures of engagement and continuous improvement."
          />
          <div className="timeWrap">
            <span className="heading">Date & Time</span>
            <div className="flex">
              <div className="start">
                <span className="heading">Start From</span>
                <div className="btnFlex">
                  <strong>
                    <img src={date} alt="date" />
                    April 30 2024
                  </strong>
                  <strong>
                    <img src={time} alt="time" />
                    9:00 pm
                  </strong>
                </div>
              </div>
              <div className="end">
                <span className="heading">Ends On</span>
                <div className="btnFlex">
                  <strong>
                    <img src={date} alt="date" />
                    April 30 2024
                  </strong>
                  <strong>
                    <img src={time} alt="time" />
                    9:00 pm
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="uploadimg">
            <span className="heading">Upload Image</span>
            <div className="img">
              <img src={upload} alt="upload" />
            </div>
          </div>
          <div className="topics">
            <span className="heading">Add Topics</span>
            <div className="dropdownFlex">
              <div className="drop">
              <Dropdown
                width="300px"
                label="Session For"
                options={sessionTypeOptions}
                setOptions={setSessionTypeOptions}
              />
              </div>
              <div className="drop2">
              <Dropdown
                width="600px"
                label="Session For Role"
                options={sessionRoleOptions}
                setOptions={setSessionRoleOptions}
              />
              </div>
            </div>
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Title 1"
              name="title"
              placeholder="Introduction to talent management"
              // value={formData.firstName}
              // onChange={handleInputChange}
              bgClr="transparent"
            />
            <TextField
              variant="textarea"
              label="Description"
              parentClass="textareaHolder"
              placeholder="Change is now and forever. It is not optional any more than breathing and sleeping and doing it well is a requirement of organization health. Learning to capture the competitive advantage of a changing landscape is an essential skill for leaders."
            />
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Title 2"
              name="title"
              placeholder="Introduction to talent management"
              // value={formData.firstName}
              // onChange={handleInputChange}
              bgClr="transparent"
            />
            <TextField
              variant="textarea"
              label="Description"
              parentClass="textareaHolder"
              placeholder="Change is now and forever. It is not optional any more than breathing and sleeping and doing it well is a requirement of organization health. Learning to capture the competitive advantage of a changing landscape is an essential skill for leaders."
            />
            <Button width="180px"><FaPlus /> Add More</Button>
          </div>
          <div className="info">
            <span className="heading">Session Info</span>
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Session URL"
              name="title"
              // value={formData.firstName}
              // onChange={handleInputChange}
              bgClr="transparent"
            />
          </div>
          <Button width="240px">Save Session</Button>
        </div>
      </div>
    </CreateWrapper>
  );
};

export default EditSession;
