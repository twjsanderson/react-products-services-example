import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// 

const Product3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid>
        <Container>
          <Row className="p-3 justify-content-center align-items-center">
              <Col md={8} className="text-center">
                  <h1 className="text-black">Main Title</h1>
                  <p className="text-black pt-3">
                      fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                      tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                      eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                      scelerisque purus semper eget duis
                  </p>
              </Col>
          </Row>
        </Container>
        <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col md={6} className="text-center">
                <h3 className="p-2">Subtitle</h3>
                <ul className="p-2">
                    <li>
                        Ting one lorem ispudom.
                    </li>
                    <li>
                        Aen oene rrlorem ispudom.
                    </li>
                    <li>
                        Ipusimf owjr sonq fsd fds fdssnd.
                    </li>
                    <li>
                        Ipusimf owjr sonq nd. fmdslfdfdsl.
                    </li>
                    <li>
                        Ipusimf owjr sonq nd.  gfd lagfmdkasl fdks kld fskl gd.
                    </li>
                    <li>
                        Ipusimf owjr sonq nd. fsdfs dfas gsa.
                    </li>
                </ul>
                <Row className="justify-content-center p-2">
                    <Button className="m-2">Buy Now</Button>
                </Row>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Product3;
