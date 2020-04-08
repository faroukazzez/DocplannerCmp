import React from "react";
import "./footerimg.css";

const imgarray=[
{
    imgLink:"https://www.docplanner.com/images/warsaw.png",
    country:"Warsaw",
},
{
    imgLink:"https://www.docplanner.com/images/barcelona.png",
    country:"Barcelona",
},
{
    imgLink:"https://www.docplanner.com/images/istanbul.png",
    country:"Istanbul",
},
{
    imgLink:"https://www.docplanner.com/images/rome.png",
    country:"Rome",
},
{
    imgLink:"https://www.docplanner.com/images/mexico-city.png",
    country:"Mexico City",
},
{
    imgLink:"https://www.docplanner.com/images/curitiba.png",
    country:"Curitiba",
}
];

const FooterImg=()=>{
    return(
        <div className="footer-img"> 
        {
            imgarray.map(e=>(
                <a className="one-img" href="/" >
                   <img className="one-country" src={e.imgLink} alt=""/>
                    <div className="btn-country">
                        <h4>{e.country}</h4>
                        <button className="btn btn-open">See Opening</button> 
                   </div>
                   
                </a>
            ))
        }
        </div>
        
    )
}
export default FooterImg;