import React from 'react';
import { FiHome } from 'react-icons/fi';
import './styles.css';
import HeaderCards from '../../components/PageHeader/index';

import { useHistory } from 'react-router-dom';

export default function homepage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    return(
        <>
        <div className="home-header">
            <h1>
                <FiHome size="36" color="#F666" />
                Home  
            </h1>
            <HeaderCards />
        </div>
        <div className="container">
           
        </div>
       </>
    );
}