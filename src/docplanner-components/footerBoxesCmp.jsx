import React from "react";
import "./footer-box.css";
const arrayfooter = [
  {
    logoLink: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    descript:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
  },
  {
    logoLink: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    descript: "booked last month",
  },
  {
    logoLink: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    descript: "visit us every month",
  },
  {
    logoLink: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    descript: "trust in our solutions",
  },
];
const FooterBox = (props) => {
  return (
    <div className="footer-boxes">
      <div className="box-content">
        <h1> The world's <br/> biggest healthcare platform</h1>
        
        <p>
          {" "}
          We work from 6 offices all over the world, bringing Docplanner <br/> Group
          to life in almost 20 countries.
        </p>
        <img className="grid-img" src="https://www.docplanner.com/img/logo.png" alt=""/>
      </div>
      <div className="four-box"> 
          {arrayfooter.map((e) => (
        <div className={e.title==="Leader in 10 countries" ? "left-box": "one-box"}>
          <img className="box-logo" src={e.logoLink} alt="" />
          <div className="box-title">{e.title}</div>
          <div className="box-desc">{e.descript}</div>
        </div>
      ))}
      </div>
      
    </div>
  );
};
export default FooterBox;
