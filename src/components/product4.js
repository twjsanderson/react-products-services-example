import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// 

const Product4 = () => {
  return (
    <Fragment>
    <Nav1 />
    <Container>
        <h1 className="text-center">Main Title</h1>
        <Row className="p-3 justify-content-center align-items-center">
            <Col className="text-left">
                <h1>Subtitle</h1>
                <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.
                </p>
            </Col>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
            <Col className="text-left">
                <h1>Subtitle</h1>
                <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.
                </p>
            </Col>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
            <Col>
                <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor.
                </p>
            </Col>
        </Row>
    </Container>
  </Fragment>
  );
}

export default Product4;
