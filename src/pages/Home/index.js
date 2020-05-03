import React from 'react';
import { FiHome } from 'react-icons/fi';
import './styles.css';
import HeaderCards from '../../components/PageHeader/index';

import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import logoImg from '../../assets/images/logo_vetor.png';

export default function homepage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    function btnStart() {
        history.push("/cadastro");
    }


    return(
        <>
        <div className="container">
            
                <section>
                    <img className="imgLogo" src={logoImg} alt="Reinventta" />
                    <h1 className="appName"> Reinventta </h1>
                </section>
                <div className="home-header">
                    <h1> O lugar certo para mudar seu jeito de fazer negócio </h1>
                </div>
                <div className="btn_area">
                    <Button className="button-start" size="lg" block onClick={btnStart}>             
                        Comece aqui
                    </Button>
                    <Link className="back-link" to="/chat">
                        Ou clique para falar com a gente pelo whatsApp.
                    </Link>
                    <p> </p>
                </div>
            </div>
        
       </>
    );
}