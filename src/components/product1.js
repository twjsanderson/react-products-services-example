import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// 

const Product1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container>
        <Row className="p-3 justify-content-center align-items-center">
            <Col md={8} className="text-center">
                <h1 className="text-black">Main Title</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardDeck>
                    <Card>
                        <h1 className="text-center">Title</h1>
                        <Card.Img variant="top" src={animal1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button className="mt-2" style={{ borderRadius: 0}}>Buy Now</Button>
                    </Card>
                    <Card>
                        <h1 className="text-center">Title</h1>
                        <Card.Img variant="top" src={animal2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button className="mt-2" style={{ borderRadius: 0}}>Buy Now</Button>
                    </Card>
                    <Card>
                        <h1 className="text-center">Title</h1>
                        <Card.Img variant="top" src={animal3} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button className="mt-2" style={{ borderRadius: 0}}>Buy Now</Button>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Product1;
