import React, { Component } from "react";

import ImageComponent from "./ImageComponent";

class ImageBloc extends Component{
    copyLink = () => {
        this.props.copiable()
    }
    render() {
        const ImageList = this.props.images.map((image) => {
            return <div className="ui card" key={image.id} style={{overflow: 'hidden'}}>
                        <div style={{border:'none'}} className="content top">
                            <div className="right floated meta">{new Date(image.created_at).toDateString()}</div>
                            <img className="ui avatar image" src={image.user.profile_image.medium} alt=""/> {image.user.first_name}
                        </div>
                        <ImageComponent url={image.urls.raw}/>
                        <div style={{border:'none'}} className="content bottom">
                            <div className="right floated meta">
                                <span onClick={this.copyLink} className="right floated">
                                    <i className="copy outline like icon"></i>
                                </span>
                            </div>
                            <i className="heart outline like icon"></i>
                            {image.likes} likes
                        </div>
                    </div>
        })
        return <div className="ui" style={{columnCount:4,margin: '20px 10%'}}>
                    {ImageList}
                </div>
    }
}

export default ImageBloc