import React from 'react';
import {CardGroup, Card, Button, Carousel} from 'react-bootstrap';
import Magalu from '../../assets/magalu.png'
import B2W from '../../assets/b2w.png'
import MercadoLivre from '../../assets/mercado-livre.png'
import Netshoes from '../../assets/netshoes.png'
import Amazon from '../../assets/amazon.png'

import './styles.css';

class ComponentHeader extends React.Component {

    render() {
        return( 
            
          
            <CardGroup className="cardArea card text-center">
                <Card className="cardHome">
                    <Card.Img variant="top"  src={Amazon}/>
                    <Card.Body>
                        <Card.Title>Amazon</Card.Title>
                    <Card.Text>
                      Amazon.com, Inc. é uma empresa transnacional de tecnologia dos Estados Unidos
                             que foca em comércio electrónico, computação em nuvem, streaming digital e 
                             inteligência artificial. Foi fundada por Jeff Bezos em julho de 1994,
                              e sua sede localiza-se em Seattle, estado de Washington.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                 
        </Card>
                <Card className="cardHome">
                    <Card.Img variant="top" src={Magalu} />
                        <Card.Body>
                        <Card.Title>Magalu</Card.Title>
                            <Card.Text>
                            Magazine Luiza é uma rede varejista de eletrônicos e móveis, 
                            fundada em 1957 na cidade de Franca,
                            interior de São Paulo, por Luiza Trajano Donato e Pelegrino José Donato.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="cardHome">
                    <Card.Img variant="top" src={B2W} />
                        <Card.Body>
                        <Card.Title>Grupo B2W</Card.Title>
                            <Card.Text>
                            B2W Digital é uma empresa de comércio eletrônico criada 
                            no final de 2006 pela fusão entre Submarino, Shoptime, Americanas.com. 
                            </Card.Text>
                            <Button variant="primary" >Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="cardHome">
                    <Card.Img variant="top" src={MercadoLivre}/>
                        <Card.Body>
                        <Card.Title>Mercado livre</Card.Title>
                            <Card.Text>
                            O MercadoLivre ou MercadoLibre é uma empresa argentina de tecnologia que oferece soluções de 
                            comércio eletrônico para que pessoas e empresas possam comprar, 
                            vender, pagar, anunciar e enviar produtos por meio da internet.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="cardHome">
                    <Card.Img variant="top" src={Netshoes}/>
                        <Card.Body>
                        <Card.Title>Netshoes</Card.Title>
                            <Card.Text>
                            A Netshoes é uma das principais plataformas de consumo on-line da América Latina.
                            Com mais de 2 mil colaboradores e, por meio dos e-commerces Netshoes, Zattini, 
                            shoestock e Free Lace, oferece um amplo portfólio de produtos e serviços 
                            nas categorias de esporte, moda e beleza.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
             
                
              
                </Card>
            </CardGroup>
           
        );
    }
}

export default ComponentHeader;