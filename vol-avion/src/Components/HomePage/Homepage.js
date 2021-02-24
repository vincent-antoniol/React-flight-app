import React, { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import PageCompte from "../PageCompte/PageCompte";
import Pub from "../Pub/Pub";
import RechercheVol from "../RechercheVol/RechercheVol";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormulaireReservation from '../FormulaireReservation/FormulaireReservation';


const Homepage = () => {
  const addSearchRow = () => {
    setCheckAllerRetour(!checkAllerRetour);
  };

  const [checkAllerRetour, setCheckAllerRetour] = useState(false);
  return (
    <div>
      <p>Homepage</p>

      <NavigationBar />

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          checked={checkAllerRetour}
          onClick={addSearchRow}
          type="checkbox"
          label="Aller-retour"
          id="myCheckbox"
        />
        {checkAllerRetour ? (
          <div>
            <RechercheVol />
            <RechercheVol />
          </div>
        ) : (
          <div>
            <RechercheVol />
          </div>
        )}
      </Form.Group>

                  
      <br/>
            <br/>
            <FormulaireReservation/>
            <Pub/>
      </div>
    );
  };
    

export default Homepage;









    