import React from 'react';
import FormulaireReservation from '../FormulaireReservation/FormulaireReservation';
import NavigationBar from '../NavigationBar/NavigationBar';
import VolSelectionne from "../VolSelectionne/VolSelectionne";


const PageReservation = () => {
    return (
      <div>
            <NavigationBar/>
            <VolSelectionne/>
            <FormulaireReservation/>
            
      </div>
    );
  };
    
    export default PageReservation;