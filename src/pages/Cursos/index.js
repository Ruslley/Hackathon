import React from 'react';
//import { FiCircle } from 'react-icons/fi';
import './styles.css';

// Imports components
//import HeaderCards from '../../components/PageHeader/index';

import { useHistory } from 'react-router-dom';

export default function homepage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    return(
        <>
        <div className="home-header">
            <h1> Cursos  </h1>
        </div>
        <div className="container">
           
        </div>
       </>
    );
}