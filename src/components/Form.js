import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Card from 'react-bootstrap/Card'
import oneaccess from '../img/oneaccess.png';

import './style/Form.scss';

const Forms = () => {
    return (
       <div class="forms" >
        <div id="space"></div>
                <div id="space"></div>

        <Container fluid>
         {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}> 

                <Container id="formSize" fluid>

   {/*From header image*/}
   <img 
           className="d-block w-100" id="fromHeaderImg"
           src={oneaccess} 
           alt="Broward college sign in from header images"
            />
            {/*End From header image*/}
         
           {/*Outline*/}
           <div class="formBody">
         
         <Form>
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Broward College Email or Username</Form.Label>
                   <Form.Control type="email" placeholder="" />
                   <Form.Text className="text-muted">
                   </Form.Text>
               </Form.Group>
         
               <Form.Group controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="" />
               </Form.Group>
         
               <Button variant="primary" type="submit" size="lg" id="ovalobutton" active>
                   Submit
                </Button>{' '}
               <br />
              <center> <p id="grayText">Help | Forgot password </p></center>
         </Form>
         </div>
                </Container>
                 </Col>
                <Col xs={6} md={4}></Col>
            </Row>
        </Container>
        <div id="space"></div>
       </div>
    );
}
 
export default Forms;


















{/* <Carousel>
            <Carousel.Item>
            <img 
                className="d-block w-100"
                src={oneaccess} 
                alt="Sunset View on Beach"
                 />
        
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://www.broward.edu/discover/Lists/LargeImageSlider/Attachments/79/EarnMore.jpg"
                alt=""
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://www.broward.edu/discover/Lists/LargeImageSlider/Attachments/120/CoronavirusUpdate.jpg"
                alt=""
                />
            </Carousel.Item>
            </Carousel>
 */}