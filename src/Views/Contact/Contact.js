import React from 'react';
import './Contact.css';



export default class Contact extends React.Component {

  constructor(props){
    super(props);
  }

  render(props){
    return (
      <div className="contact-page">
        <div className="contact-title">
          Contact
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-content">
              For inquiries, email me at&nbsp;
              <a href="mailto:contact@janicechan.design">
                contact@janicechan.design
              </a>
            </div>
          </div>
        </div>
      </div> 
    )
      
  }

}

