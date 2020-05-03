import React from 'react';
//import { FiCircle, FiMoon, FiTarget, FiSun } from 'react-icons/fi';
import './styles.css';

// Imports components
//import HeaderCards from '../../components/PageHeader/index';

import { useHistory } from 'react-router-dom';

export default function parceirospage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    return(
        <>
        <div className="home-header">
            <h1> Parceiros </h1>
        </div>
        <div className="container">
           
        </div>
       </>
    );
}