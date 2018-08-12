import React, {Component} from 'react';

import DetailPageInfo from './DetailPageInfo/DetailPageInfo';
import ImageGallery from './ImageGallery/ImageGallery';

import detailPageService from './detailPageService';

import './DetailPage.css';

export default class DetailPage extends Component{

    constructor(props){
      super(props);
      this.pageId = this.props.match.params.pageId;
      this.section = detailPageService.getSection(this.pageId);
      this.detailPage = this.section.detailPage;
      this.imageGallery = this.section.imageGallery;
    }

    render(){
      return (
        <div className="detail-page">
          <div className="detail-content">
            <div className="content-image">
              {
                this.section.hoverPhotoUrl
                  ? (
                      <img src={this.section.hoverPhotoUrl}/>
                    )
                  : 'IMAGE'
              }
            </div>
            <div className="content-info">
              <DetailPageInfo
                detailPage={this.detailPage} />
            </div>
          </div>
          <div className="detail-gallery">
              <ImageGallery
                imageGallery={this.imageGallery}/>
          </div>
        </div>
      )
    }

}