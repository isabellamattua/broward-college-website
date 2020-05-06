import React from 'react';
import './style/errorSass.scss';
import erroOfLife from '../img/demon_jorge.jpg';
 
const Error = () => {
    return (
      <div class='body'>
         <div class="box"> <br/> <br/>
          <p class='title'>Error: Page does not exists!</p>
          <br/> 
          <img class="imageCarousel" src={erroOfLife} alt ="Top Ten College !"/>  
           <br/> <br/> <br/> <br/> <br/>
      </div>
      <br/> <br/><br/> <br/>
         
      </div>
   
    );
}
 
export default Error;