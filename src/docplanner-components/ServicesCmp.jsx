import React from "react";

const ServicesCmp = (props) => {
  return (
    <div className={props.info.choosecountry ? "Box Box-gr" : "Box Box-bl"}>
      <h5>{props.info.name}</h5>
      <h3>{props.info.description}</h3>
      <div className="image-flow">
        <div className="choose-country">
          {props.info.choosecountry && (
            <select data-id="domain-switcher" className="country-btn">
              <option>Choose country</option>
              <option value="http://www.doctoraliar.com">Argentina</option>
              <option value="http://www.doctoralia.com.au">Australia</option>
              <option value="http://www.doctoralia.com.br">Brazil</option>
              <option value="http://www.doctoralia.cl">Chile</option>
              <option value="http://www.doctoralia.co">Colombia</option>
              <option value="http://www.znamylekar.cz">Czech</option>
              <option value="http://www.doctoralia-fr.com">France</option>
              <option value="http://www.miodottore.it">Italy</option>
              <option value="http://www.doctoralia.com.mx">Mexico</option>
              <option value="http://www.doctoralia.pe">Peru</option>
              <option value="http://www.znanylekarz.pl">Poland</option>
              <option value="http://www.doctoralia.com.pt">Portugal</option>
              <option value="http://www.doctoralia.es">Spain</option>
              <option value="http://www.doktortakvimi.com">Turkey</option>
              <option value="http://www.doctoralia.co.uk">UK</option>
            </select>
          )}
        </div>
		<img src={props.info.imageLink} alt="" />
      </div>
      
    </div>
  );
};
export default ServicesCmp;
