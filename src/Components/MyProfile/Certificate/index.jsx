import React from "react";
import { CertiWrapper } from "./Certificate.styles";
import { CertificateData } from "../../../Constant/Data";
import prev from "../../../assets/profile/prev.png";
import nextt from "../../../assets/profile/next.png";
import { TbPencil } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const Certificate = () => {
  return (
    <CertiWrapper>
      <div className="wrapper">
        <div className="flexwrap">
          <h2>Certificate</h2>
          <div className="icons">
            <FaPlus />
            <TbPencil />
          </div>
        </div>
        <div className="cardWrap">
          <figure>
            <img src={prev} alt="prev icon" />
          </figure>
          <div className="cardHolder">
            {CertificateData.map((val, ind) => (
              <div className="card" key={ind}>
                <figure>
                  <img src={val.img} alt="certificate" />
                </figure>
                <h4>{val.title}</h4>
              </div>
            ))}
          </div>
          <figure>
            <img src={nextt} alt="next icon" />
          </figure>
        </div>
      </div>
    </CertiWrapper>
  );
};

export default Certificate;
