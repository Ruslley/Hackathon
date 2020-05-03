/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

// Imports components
//import HeaderCards from '../../components/PageHeader/index';

import { Link, useHistory } from 'react-router-dom';

export default function cadastrospage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    // Realiza o cadastro
    async function handleRegister(e) {
        e.preventDefault();

    }


    return(
        <>
        <div className="register-container">
            <div className="register-content">
                <section>
                    {/*<img src={cadImg} alt="img" />*/}
                    <h1> Cadastro </h1>
                    <p> A gente te ajuda a encontrar o que você precisa.</p>

                    <Link className="cad-back-link" to="/">
                        <FiArrowLeft size="16" color="#007bff" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}    
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}    
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}    
                        />
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
            </div>
       </>
    );
}