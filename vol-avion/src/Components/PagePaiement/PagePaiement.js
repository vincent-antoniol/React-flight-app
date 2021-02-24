import { Alert } from 'bootstrap';
import React from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import SelectionPaiement from "../SelectionPaiement/SelectionPaiement";
import FormulairePaiement from "../FormulairePaiement/FormulairePaiement";


const PagePaiement = () => {
    return (
      <div>
            <NavigationBar/>
            <h2>Selectionner votre moyen de paiement</h2>
            <SelectionPaiement/>
            <FormulairePaiement/>
      </div>
    );
  };
    
    export default PagePaiement;