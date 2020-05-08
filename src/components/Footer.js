import React from 'react';
import './style/FooterSass.scss';
import twitertag from '../img/twitterTag.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import link from '../img/link.png';
import be from '../img/be.png';
import drop from '../img/drop.png';
import snap from '../img/snap.png';
import pin from '../img/pin.png';

const Footer = () => {
    return (
        <footer class="footer">
            <div> 
                <p class="title">Additional Links </p>
                <hr></hr>
                <p class="">
                    Legal<br/>
                    Privacy<br/>
                    Copyright<br/>
                    Strategic Plan<br/>
                    BC Concernline<br/>
                    BC Records Custodian<br/>
                    SACS COC Accreditation<br/>
                    Site Index (A-Z)​​<br/>
                </p>

            </div>

            <div>
            <p class="title">Contact Us </p>
                <p class="">
                <hr></hr>
                    Broward College​​​<br/>
                    111 East Las Olas Boulevard​​<br/>
                    Fort Lauderdale, FL 33301​​<br/>
                    Phone: 954.201.7350​​<br/>
                    Contact Us​​<br/>
                </p>

            </div>
            
            <div class="buttonGroup">
                <p class="title">Follow Us </p>
                <hr></hr>
                <div class="buttonBox">
                <img class="pictureF" src={instagram} alt ="Top Ten College !"/> 
                <img class="pictureF" src={link} alt ="Top Ten College !"/> 
                <img class="pictureF" src={twitertag} alt ="Top Ten College !"/> 
                <img class="pictureF" src={facebook} alt ="Top Ten College !"/> 
                 </div>
                <div class="buttonBox">
                <img class="pictureF" src={snap} alt ="Top Ten College !"/> 
                <img class="pictureF" src={pin} alt ="Top Ten College !"/> 
                <img class="pictureF" src={be} alt ="Top Ten College !"/> 
                <img class="pictureF" src={drop} alt ="Top Ten College !"/> 
                </div>
                    
                    
            </div>

            
        </footer>
    );
}


export default Footer;