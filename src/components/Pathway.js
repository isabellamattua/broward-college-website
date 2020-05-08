import React from 'react';
import './style/Pathway.scss';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const pathway = () => {
    return (



        <div class="body">
            <h1 class="titleStyle">Career Pathways</h1>
          

            <br /> <br />
            <br /> <br />
            <div class="cardStyle">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={require('../img/first.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Arts, Humanities, Communication, & Design (AHCD)</Card.Title>

                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                                

                            </DropdownButton>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/second.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Business</Card.Title>
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Bachelor's of Applied Science Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/third.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Education</Card.Title>
                     
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/fourth.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Health Sciences</Card.Title>
                        
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>

            <br /> <br />

            <div class="cardStyle">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={require('../img/fifth.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Industry, Manufacturing, Construction & Transportation (IMCT)</Card.Title>
                            
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/sixth.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Public Safety</Card.Title>
                        
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/seventh.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Science, Technology, Engineering and Math (STEM)</Card.Title>
                          
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/eigth.png')} class="imageStyle"/>
                        <Card.Body>
                            <Card.Title>Social Behavioral Sciences & Human Services (SBSHS)</Card.Title>
                            
                            <DropdownButton title="Programs of Study" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">AA Transfer Major to Bachelor's Degree Programs</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Career and Technical Education Programs including AS to Bachelor's Degree Programs</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <br /> <br />


        </div>

    );
}

export default pathway;