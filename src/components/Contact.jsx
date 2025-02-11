import React from 'react';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import Call from '@mui/icons-material/Call';
import FmdGood from '@mui/icons-material/FmdGood';
import '../styles/Contact.css';


function Contact() {
  return (
    <div className='from-div-main' name="contact">
        <div className='from-scend-div'>
        <h1 className='from-text-tag'><span>Get in</span> Touch!!!</h1>
        <div className='from-media-div'>
        <div className='from-input-div'>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder='Email'/>
            <div className='from-text-input-div'>
            <textarea placeholder='Message'>
            </textarea>
            </div>
            <button className='contact-input-btn'>Submit</button>
        </div>

        <div className='media-container-div'>
            <div className='media-pics-div'>
                <div> 
                    <LinkedIn style={{fontSize:"35px",  color:"#f8d330"}}/>
                    <a href='https://www.linkedin.com/in/andugulapati-somaraju-23081726b/' target='_blank'>Andugulapati Somaraju</a>
                </div>
                <div>
                    <GitHub style={{fontSize:"35px", color:"#f8d330"}}/>
                    <a href="https://github.com/somarajuandugulapati" target='_blank'>Somaraju Andigulapati</a>
                </div>
                <div>
                    <Email style={{fontSize:"35px", color:"#f8d330"}}/>
                    <a href="mailto:somarajuarchitecture3d@gmail.com" >somarajuarchitecture3d@gmail.com</a>
                </div>
                <div>
                    <Call style={{fontSize:"35px", color:"#f8d330"}}/>
                    <a href='tel:+919177675971'>+91-9177675971</a>
                </div>
                <div>
                    <FmdGood style={{fontSize:"35px", color:"#f8d330"}}/>
                    <a style={{color:'darkblue'}}>Andhra Pradesh</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Contact;
