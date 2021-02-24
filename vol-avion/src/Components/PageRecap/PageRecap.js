import React from 'react';
import Button from "react-bootstrap/Button";
import NavigationBar from "../NavigationBar/NavigationBar";
import VolSelectionne from "../VolSelectionne/VolSelectionne";
import FormulaireReservation from "../FormulaireReservation/FormulaireReservation";

const PageRecap = () => {
    return (
      <div>
          <NavigationBar/>
          <h2>Recapitulatif de votre reservation</h2>
            <VolSelectionne/>
            <FormulaireReservation/>
            <Button variant="primary" type="continuer">
          Continuer
        </Button>
        <Button variant="primary" type="continuer">
          Modifier
        </Button>
        <Button variant="primary" type="continuer">
          Anuller
        </Button>
      </div>
    );
  };
    
    export default PageRecap;