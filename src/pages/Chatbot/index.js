/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
//import { FiCircle } from 'react-icons/fi';
import './styles.css';

// Imports components
import HeaderCards from '../../components/PageHeader/index';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function chatbotPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    const [whatsapp, setWhatsapp] = useState('');

    // Inicia comunicação com Chatbot
    async function handleWhats(e) {
        e.preventDefault();

    }


    return(
        <div className="container">
            <div className="content">
                <section>
                   {/* <img src={logoImg} alt="Be the Hero" />*/}

                    <h1> Informe seu whats e o nosso chatbot irá lhe auxiliar. </h1>
                        
                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#007bff" />
                        &nbsp; Voltar
                    </Link>
                </section>
                <form onSubmit={handleWhats}>
                <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}    
                    />
                    <button className="button" type="submit"> Iniciar conversa </button>
                </form>
            </div>
        </div>
    );
}