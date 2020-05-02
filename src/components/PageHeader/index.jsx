import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';


class ComponentHeader extends React.Component {

    render() {
        return(
            <CardGroup>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Conteudo do card
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Texto </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Conteudo do card
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Texto </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Conteudo do card
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Texto </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        );
    }
}

export default ComponentHeader;