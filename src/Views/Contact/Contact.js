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
          contact me
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-type">
              Name:
            </div>
            <div className="contact-content">
              Janice Chan
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-type">
              Email:
            </div>
            <div className="contact-content">
              contact@janicechan.design
            </div>
          </div>
        </div>
      </div> 
    )
      
  }

}

