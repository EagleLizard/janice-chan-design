
import React, { Component } from 'react';
import './DetailPageInfo.css';

import {FadeIn} from '../../../common/common';

const DELAY_MOD = 40;

export default class DetailPageInfo extends Component{
  constructor(props){
    super(props);
    this.delayCount = 0;
  }

  getDelayCount(){
    return this.delayCount += DELAY_MOD;
  }

  render(){

    return (
      <div className="detail-page-info">
        <div className="detail-header">
          <FadeIn delay={this.getDelayCount()} children={
            <div className="header-title">
              {
                this.props.detailPage.title
              }
              <FadeIn delay={this.getDelayCount()} children={
                <div className="header-subtitle">
                  {
                    this.props.detailPage.subtitle
                  }
                </div>
              }/>
            </div>  
          }/>
        </div>
        <div className="detail-body">
          <FadeIn delay={this.getDelayCount()} children={
            <div className="body-credit">
              {
                this.props.detailPage.credit
              }
            </div>
          }/>
            <div className="body-description">
              {
                this.props.detailPage.description.map((text, idx)=>(
                  <FadeIn key={idx} delay={this.getDelayCount()} children={
                    <div 
                      className="description-paragraph"
                      key={idx}>
                      {text}
                    </div>
                  }/>
                ))
              }
            </div>
        </div>
        <FadeIn delay={this.getDelayCount()} children={
          <div className="detail-footer">
            <div className="footer-year">
              {
                `Year: ${this.props.detailPage.year}`
              }
            </div>
            <div className="footer-location">
              {
                `Location: ${this.props.detailPage.location}`
              }
            </div>
          </div>
        }/>
      </div>
    );
  }
}