import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './style/homeSass.scss';
import twitter from '../img/twitter1.png';





const Home = () => {
    return (
        <div class= "body">
            <Carousel>
                <Carousel.Item>
                    <img class="imageCarousel" src={require('../img/image1.png')} alt ="Top Ten College !"/>  
                </Carousel.Item>

                <Carousel.Item>
                    <img class="imageCarousel" src={require('../img/image3.png')} alt ="Top Ten College !"/> 
                </Carousel.Item>
                
                <Carousel.Item>
                    <img class="imageCarousel" src={require('../img/image2.png')} alt ="Top Ten College !"/> 
                </Carousel.Item>
            </Carousel>
           
            <br/> <br/>
            <div class="cardStyle">
            
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title class="cardTitleStyle">Find Your Path</Card.Title>
                            <Card.Text>
                                    <li>Arts, Humanities, Communication, and Design (AHCD) </li>
                                    <hr></hr>
                                    <li> Business</li>
                                    <hr></hr>
                                    <li> Education</li>
                                    <hr></hr>
                                    <li> Health Sciences</li>
                                    <hr></hr>
                                    <li> Industry, Manufacturing, Construction & Transportation (IMCT)</li>
                                    <hr></hr>
                                    <li> Public Safety</li>
                                    <hr></hr>
                                    <li> Science, Technology, Engineering and Math (STEM)</li>
                                    <hr></hr>
                                    <li> Social & Behavioral Sciences & Human Services (SBSHS)</li>
                                    <hr></hr>
                                    <li> Corporate and Continuing Education</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                     <Card>
                        <Card.Body>
                            <Card.Title class="cardTitleStyle">Choose your Degree</Card.Title>
                            <Card.Text>
                                    <li>Associate Degrees </li>
                                        <hr></hr>
                                    <li> Bachelor Degrees</li>
                                        <hr></hr>
                                    <li> Certificates & Diplomas</li>
                                        <hr></hr>
                                    <li> Corporate and Continuing Education</li>
                                    <hr ></hr>
                            </Card.Text> <br/><br/>
                            <Card.Title class="cardTitleStyle">Choose your Classes</Card.Title>
                            <Card.Text>
                                    <li>Browse traditional and online classes for next semester and see what we have to offer</li>
                                    <div class="buttonBu">
                                    <br/> <br/>
                                    <button class="button">Pick you class</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card>
                        <Card.Body>
                            <Card.Title class="cardTitleStyle">Follow Us</Card.Title>
                            <Card.Text>
                                <img src= {twitter} alt="twitterPicture" class= "picture"/>
                                <div class="buttonB">
                                    <br/> <br/><br/>
                                    <button class="button">Follow Us!</button>
                                </div>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
    
                
            <br/> <br/><br/> <br/>

       </div>
    );
}
 
export default Home;